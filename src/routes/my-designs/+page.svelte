<script>
	import { get, post } from '$lib/api';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import tooltip from '$lib/use/tooltip';
	import currentUser from '$lib/stores/currentUser';
	import requests from '$lib/stores/requests';
	import services from '$lib/stores/services';

	let requestTypes = {
		ui_ux_prototype: 'UI/UX Prototype'
	};

	let formatRequestType = (requestType) => {
		return $services.find((s) => s.key === requestType).name;
	};

	let formatRequestStatus = (request) => {
		if (!request.isActivated) {
			return 'In Draft';
		} else if (!request.isCompleted) {
			return 'Work In Progress';
		} else return 'Completed';
	};

	let activateRequest = async (request) => {
		let data = await post(`stripe/activate-request`, {
			requestId: request._id
		});

		$requests = $requests.map((r) => {
			if (r === request) {
				r.isActivated = true;
			}

			return r;
		});
	};

	let completeRequest = async (request) => {
		let data = await post(`stripe/complete-request`, {
			requestId: request._id
		});

		request.isCompleted = true;
	};

	let addPaymentMethod = async () => {
		let { url: stripeUrl } = await post(`stripe/payment-method`, {});
		goto(stripeUrl);
	};

	let sendMessage = () => {
		window.$crisp && window.$crisp.push(['do', 'chat:open']);
	};
</script>

<div class="flex justify-between">
	<h2 class="mb-8">My Designs</h2>
	<a href="/new"><button>Get New Design ⚡️</button></a>
</div>

<div class="grid grid-cols-2 w-full gap-4 w-full">
	{#each $requests as request}
		<a href={request.href}>
			<div class="rounded-xl border border-slate-600 flex flex-col justify-between mb-4 transition">
				<div class="w-full relative aspect-video" style="background-color: rgba(0,0,0, .3);">
					<div
						class="rounded-t-xl w-full h-full flex flex-col items-center justify-center text-center absolute z-10"
						style="background: rgba(0, 0, 0, .9);"
					>
						<div class="mb-2 opacity-80">{formatRequestType(request.type)}</div>
						<div class="text-lg my-2">
							{formatRequestStatus(request)}
							<span
								use:tooltip
								class="font-bold"
								title="We'll notify you via email once designs are ready for review">ℹ️</span
							>
						</div>
					</div>

					{#if request.isActivated}
						<div class="absolute left-4 top-4 z-10 px-2 rounded-lg bg-zinc-600">Revisions: 0/2</div>
					{/if}
					<img
						class="w-full rounded-t-xl cover-image absolute h-full object-cover"
						src={request.img || $services.find((r) => r.key === request.type).img}
					/>
				</div>

				<div class="p-4">
					<h3 class="font-bold mb-2">{request.project.name}</h3>

					<p class="opacity-80 line-clamp-2">{request.data.description}</p>
				</div>

				{#if request.isActivated}
					{#if !request.isCompleted}
						<Button
							class="w-full text-center py-4 border cursor-pointer"
							onClick={() => completeRequest(request)}
						>
							Complete Request
						</Button>
					{:else}{/if}

					<a href="/my-designs/{request._id}">
						<div class="w-full text-center py-4 border cursor-pointer">Send message</div>
					</a>
					{#if request.isCompleted}
						<!-- <div class="w-full text-center py-4 border rounded-b-xl cursor-pointer">
							Open Figma Prototype
						</div> -->
					{/if}
				{:else if $currentUser.paymentMethods?.length}
					<Button
						class="w-full text-center py-4 border rounded-b-xl cursor-pointer"
						onClick={() => activateRequest(request)}
					>
						Activate for $9.99
					</Button>
				{:else}
					<button
						class="w-full text-center py-4 border rounded-b-xl cursor-pointer"
						on:click={() => addPaymentMethod()}
					>
						Add Card To Activate
					</button>
				{/if}
			</div>
		</a>
		<!-- <div>
			<div>Timeline</div>

			<table>
				<tr>
					<td>Prototype</td>
					<td>Demo</td>
				</tr>
			</table>
		</div> -->
	{/each}
</div>
