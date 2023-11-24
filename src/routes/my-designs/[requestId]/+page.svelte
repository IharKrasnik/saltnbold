<script>
	import _ from 'lodash';
	import { onMount, afterUpdate, tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import { v4 as uuidv4 } from 'uuid';
	import { goto } from '$app/navigation';

	import FileInput from '$lib/components/FileInput.svelte';
	import RequestChanges from '$lib/components/review/RequestChanges.svelte';
	import SubmitForReview from '$lib/components/review/SubmitForReview.svelte';
	import Button from '$lib/components/Button.svelte';
	import RenderUrl from '$lib/components/RenderUrl.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import linkifyHtml from 'linkify-html';

	import { browser } from '$app/environment';
	import { get, post, postFile } from '$lib/api';
	import { page } from '$app/stores';
	import toDollars from '$lib/helpers/toDollars';
	import showCrispChat from '$lib/helpers/showCrispChat';

	import currentUser from '$lib/stores/currentUser';
	import { formatRequestType } from '$lib/stores/services';
	import requests from '$lib/stores/requests';

	let request = $requests.find((r) => r._id === $page.params.requestId);

	let newMessage = { content: '', files: [] };

	let messages = [
		{
			_id: '1',
			createdOn: request.createdOn,
			content: `Hey ${request.user.fullName.split(' ')[0]}! Please describe your request`
		},
		{
			_id: '2',
			createdOn: request.createdOn,
			sender: request.user,
			content:
				`${request.data.description || ''}` +
				`${
					request.data.mustHaveWorkflow
						? `\nMust-have worfklow: ${request.data.mustHaveWorkflow}`
						: ''
				}` +
				`${request.data.references ? `\nReferences: ${request.data.references}` : ''}`,
			isRequest: true
		}
	];

	if (request.activateAmount) {
		messages = [
			...messages,
			{
				_id: '3',
				createdOn: request.createdOn,
				content: `Thank you! 👏
The ${formatRequestType(request.type)} price is $${(request.amount / 100).toFixed(
					2
				)}. Please pre-pay ${toDollars(
					request.activateAmount
				)} to activate your request. Once you approve our work, will ask you to pay remaining ${toDollars(
					request.amount - request.activateAmount
				)}`
			}
		];
	} else {
		messages = [
			...messages,
			{
				_id: '3',
				createdOn: request.createdOn,
				content: `Thank you!
We'll take a look and get back to you shortly.
You'll get a notification to your email ${$currentUser.email}`
			}
		];
	}
	let isLoading = true;

	let loadMessages = async () => {
		let msgs = await get('messages', {
			requestId: request._id
		});

		messages = [...messages, ...msgs.results];
		await tick();
		// scrollToBottom(chatEl);
		isLoading = false;
	};

	loadMessages();

	let chatEl;

	let isPendingReview = () => {
		return (
			!request.isCompleted &&
			request.reviews &&
			_.last(request.reviews).isPending &&
			$currentUser._id === request.user._id &&
			(request.totalReviewsCount || 2 - request.reviews?.length > 0)
		);
	};

	const scrollToBottom = (node = chatEl) => {
		const scroll = () =>
			node.scroll({
				top: node.scrollHeight
			});
		scroll();

		return { update: scroll };
	};

	if (browser) {
		onMount(() => scrollToBottom(chatEl));
	}

	let activateRequest = async () => {
		let { messages: msgs } = await post(`stripe/activate-request`, {
			requestId: request._id
		});

		$requests = $requests.map((r) => {
			if (r === request) {
				r.isActivated = true;
			}

			return r;
		});

		messages = [...messages, ...msgs];

		request.isActivated = true;
	};

	let isRequestingChanges = false;

	let changeRequest = { message: '', files: [] };

	let completeRequest = async () => {
		let data = await post(`stripe/complete-request`, {
			requestId: request._id
		});

		request.isCompleted = true;
	};

	let onChangeRequestSubmitted = ({ messages: msgs }) => {
		messages = [...messages, ...msgs];

		request.reviews = request.reviews.map((r) => ({ ...r, isPending: false }));
	};

	let onReviewSubmitted = ({ messages: msgs }) => {
		messages = [...messages, ...msgs];
		request.reviews = request.reviews || [{ isPending: true }];

		request.reviews = request.reviews.map((r) => ({ ...r, isPending: true }));
	};

	let sendMessage = async () => {
		if (!newMessage.content) {
			return;
		}

		newMessage._id = uuidv4();
		newMessage.sender = $currentUser;

		messages = [...messages, { ...newMessage }];

		let createdMessage = post(`requests/${request._id}/messages`, {
			content: newMessage.content,
			files: newMessage.files
		});

		newMessage.content = '';
		newMessage.files = [];
		isSendMessage = false;
	};

	let isSendMessage = false;

	$: if (messages && browser && chatEl) {
		tick().then(() => {
			scrollToBottom();
		});
	}
	let addPaymentMethod = async () => {
		let { url: stripeUrl } = await post(`stripe/payment-method`, {});
		goto(stripeUrl);
	};
</script>

<div class="flex justify-between items-center">
	<div>
		<h1 class="mb-4">{request.data.name || ''}</h1>
		<h3 class="opacity-80">{formatRequestType(request.type)}</h3>
	</div>
	<div>
		{#if $currentUser._id === request.user._id && request.isActivated}
			{#if request.isCompleted}
				<a href={request.figmaFileUrl} target="_blank"><button>Download Figma</button></a>
			{:else}
				<Button class="green" onClick={completeRequest}>Approve & Download</Button>
			{/if}
		{/if}
	</div>
</div>

<!-- 
	<iframe
		style="border: 1px solid rgba(0, 0, 0, 0.1);"
		width="800"
		height="450"
		src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8Mb6BCx3yTShfW6ZvDkhGe%2FShelf-prototype%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D202-11871%26viewport%3D846%252C-972%252C0.1%26t%3DsKrDPl9rYMwhFkdh-1%26scaling%3Dscale-down%26starting-point-node-id%3D202%253A11871%26mode%3Ddesign"
		allowfullscreen
	/> -->
<!-- <iframe
		src="https://www.figma.com/proto/8Mb6BCx3yTShfW6ZvDkhGe/Shelf-prototype?page-id=0%3A1&type=design&node-id=202-11871&viewport=846%2C-972%2C0.1&t=ZXtZTOi4ZCn6whbq-1&scaling=scale-down&starting-point-node-id=202%3A11871"
	/> -->

<div class="bg-zinc-900 rounded-xl mt-8">
	<div class="p-4 bg-[#222] rounded-t-xl flex items-center justify-between w-full">
		<h2>
			<div>
				Chat with Salt & Bold
				{#if !request.isActivated}<span class="ml-2" title="Please pay to activate chat">🔐</span
					>{/if}
			</div>
		</h2>
		{#if !request.isActivated}
			<div class="ml-2 text-right cursor-pointer" on:click={showCrispChat}>
				Questions? Message Us
			</div>
		{/if}
	</div>
	<div
		style="height: calc(100vh - {isRequestingChanges ? 450 : 350}px)"
		class=" p-4 overflow-y-scroll"
		bind:this={chatEl}
	>
		{#each messages as message (message._id)}
			{#if message.isSystem}
				<div class="system">
					<div class="content">
						{#if message.metadata.type === 'payment'}
							<div class="emoji">💸</div>

							<div>
								Paid <b>${(message.metadata.amount / 100).toFixed(2)}</b>
								{#if $currentUser._id === request.user._id}
									from
									<b
										>{$currentUser.paymentMethods.find(
											(pm) => pm.id === message.metadata.paymentMethodId
										).card.last4}</b
									>
								{/if}
							</div>
						{/if}
						{#if message.metadata.type === 'review'}
							<div class="emoji">🙌</div>

							<div>
								Review #{message.metadata.number}
							</div>
						{/if}
						{#if message.metadata.type === 'change-request'}
							<div class="emoji">🙅</div>

							<div>Changes Requested</div>
						{/if}
					</div>
				</div>
			{:else}
				<div class="message {message.sender?._id === $currentUser._id ? 'my' : 'their'}" in:fade>
					{#if message.sender?._id !== $currentUser._id}
						<div>
							{#if message.sender?._id}
								<img class="rounded-full w-[50px] h-[50px]" src={message.sender.avatarUrl} />
							{:else}
								<img class="rounded-full w-[50px] h-[50px]" src={'/salt_logo.png'} />
							{/if}
						</div>
					{/if}
					<div class="content flex-start">
						<div class=" whitespace-pre-wrap" style="word-break: break-word;">
							{@html linkifyHtml(message.content, { target: '_blank' })}

							{#if message.files?.length}
								<div class="flex">
									{#each message.files as file}
										<div class="mt-4 mr-2">
											<RenderUrl imgClass="object-contain max-h-[300px]" url={file.url} />
										</div>
									{/each}
								</div>
							{/if}

							<!-- {#if message.isRequest}
								<button class="cursor-pointer p-2 secondary mt-4">View Full Request</button>
							{/if} -->
						</div>
					</div>

					{#if message.sender?._id === $currentUser._id}
						<div>
							<img class="rounded-full w-[50px] h-[50px]" src={message.sender.avatarUrl} />
						</div>
					{/if}
				</div>
			{/if}
		{/each}

		{#if isLoading}
			<Loader />
		{/if}
	</div>

	{#if newMessage.files?.length}
		<div class="flex">
			{#each newMessage.files as file}
				<RenderUrl imgClass="max-h-[100px] w-auto mr-4" url={file.url} />
			{/each}
		</div>
	{/if}

	<div class="bg-[#222] rounded-b-xl">
		{#if $currentUser.isAdmin || request.isActivated}
			{#if $currentUser.isAdmin || isSendMessage || !request.reviews?.length || !_.last(request.reviews).isPending || request.isCompleted}
				<div class="flex items-center p-4">
					<div style="margin-left: -16px;">
						<label for="new-file" class="p-4 cursor-pointer">
							📂

							<input
								id="new-file"
								type="file"
								on:change={async (e) => {
									let file = await postFile('files', (e.target?.files || e.detail?.files)[0]);

									newMessage.files = [...(newMessage.files || []), file];
								}}
								hidden
							/>
						</label>
					</div>

					<div class="justify-between flex w-full items-center h-full">
						<textarea class="w-full h-full" bind:value={newMessage.content} />

						<button class="ml-8 shrink-0" on:click={sendMessage}>Send Message</button>
					</div>
				</div>
			{/if}
		{:else}
			<div
				class="flex justify-center items-center w-full h-full bg-green-900 p-4 py-8 rounded-b-xl"
			>
				{#if $currentUser.paymentMethods?.length}
					<Button class="green" onClick={activateRequest}
						>Activate for ${(request.activateAmount / 100).toFixed(2)}</Button
					>
				{:else}
					<button class="green" on:click={() => addPaymentMethod()}> Add Card To Activate </button>
				{/if}
			</div>
		{/if}
	</div>
</div>

{#if !request.isCompleted}
	{#if !isSendMessage && _.last(request.reviews)?.isPending && $currentUser._id === request.user._id}
		<RequestChanges
			{request}
			bind:isRequestingChanges
			onApproved={completeRequest}
			onSubmitted={onChangeRequestSubmitted}
			onSendMessage={() => (isSendMessage = true)}
		/>
	{/if}

	{#if $currentUser.isAdmin && !_.last(request.reviews)?.isPending}
		<SubmitForReview {request} onSubmitted={onReviewSubmitted} />
	{/if}
{/if}

<style>
	.system {
		@apply flex justify-center;
	}

	.emoji {
		@apply flex justify-center items-center rounded-full bg-gray-800 w-[30px] h-[30px] mr-4;
	}

	.system .content {
		@apply flex items-center border border-gray-400 p-4 px-8 rounded-xl m-4;
	}

	.message {
		@apply flex my-4 items-end;
	}

	.message .content {
		@apply rounded-xl flex shrink-0 p-4 max-w-[70%];
	}

	.my {
		@apply justify-end;
	}

	.my .content {
		@apply bg-gray-700 rounded-tr-none mr-2;
	}

	.their .content {
		@apply bg-gray-800 rounded-bl-none ml-2;
	}
</style>
