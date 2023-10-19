<script>
	import _ from 'lodash';
	import { get, post, postFile } from '$lib/api';
	import Button from '$lib/components/Button.svelte';
	import RenderUrl from '$lib/components/RenderUrl.svelte';
	import toDollars from '$lib/helpers/toDollars';

	export let request;
	export let onSubmitted = (cr) => {};
	export let onApproved = () => {};
	export let onSendMessage = () => {};

	let isRequestingChanges = false;

	let changeRequest = {
		message: '',
		files: []
	};

	let requestChanges = () => {
		isRequestingChanges = true;
	};

	// requestChanges();

	let submitChangeRequest = async () => {
		let { messages } = await post(`requests/${request._id}/request-changes`, {
			message: changeRequest.message,
			files: changeRequest.files
		});
		onSubmitted({ messages });
	};
</script>

{#if isRequestingChanges}
	<div class="p-4 px-8 mt-8 my-8 bg-gray-800 rounded-xl">
		<h3 class="font-bold">Request Changes</h3>
		<div class="rounded-xl bg-indigo-700 p-4 my-4">
			Please provide detailed feedback on what need to be improved. Attach files or send us links to
			explain your points.
		</div>
		<div class="h-full">
			<textarea
				class="w-full min-h-[250px]"
				placeholder="Please change something..."
				bind:value={changeRequest.message}
			/>

			<label for="new-file" class="my-4 cursor-pointer">
				🗂 Attach File

				<input
					id="new-file"
					type="file"
					on:change={async (e) => {
						let file = await postFile('files', (e.target?.files || e.detail?.files)[0]);

						changeRequest.files = [...changeRequest.files, file];
					}}
					hidden
				/>
			</label>

			<div class="flex flex-wrap">
				{#each changeRequest.files as file}
					<RenderUrl imgClass="mr-4 mb-4 max-h-[200px] object-cover" url={file.url} />
				{/each}
			</div>
		</div>
		<hr class="my-8 opacity-30" />
		<div>
			<Button class="orange mt-2 mr-4" onClick={submitChangeRequest}>Request Changes</Button>
			<div class="mt-2">You have 1 revision left</div>
		</div>
	</div>
{:else}
	<div class="grid grid-cols-2 w-full rounded-xl my-8">
		<div class="bg-green-900 p-4">
			<Button class="green" onClick={onApproved}>Approve & Download</Button>
			<div class="mt-2">
				Pay remaining {toDollars(request.amount - request.activateAmount)} and download your files
			</div>
		</div>
		{#if request.totalReviewsCount || 1 - request.reviews?.length > 0}
			<div class="bg-orange-900 p-4">
				<button class="orange" on:click={requestChanges}>Request Changes</button>

				<div class="mt-2">
					You have {request.totalReviewsCount || 1 - request.reviews?.length || 0 + 1} revisions left
				</div>
			</div>
		{:else}
			<div class="bg-blue-900 p-4">
				<button on:click={onSendMessage}>Send Message</button>

				<div class="mt-2">
					You don't have any change requests yet. You can still chat with the team
				</div>
			</div>
		{/if}
	</div>
{/if}
