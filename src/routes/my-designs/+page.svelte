<script>
	import { get, post } from '$lib/api';
	import { goto } from '$app/navigation';
	import currentUser from '$lib/stores/currentUser';
	import requests from '$lib/stores/requests';

	let activateRequest = async (request) => {
		let data = await post(`stripe/activate-request`, {
			requestId: request._id
		});

		request.isActivated = true;
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
</script>

<div class="flex justify-between">
	<h2 class="mb-8">My Designs</h2>
	<a href="/new"><button>Get New Design ⚡️</button></a>
</div>
<div class="grid grid-cols-2 w-full gap-4 w-full">
	{#each $requests as request}
		<a href={request.href}>
			<div class="rounded-xl border border-slate-600 flex flex-col justify-between mb-4 transition">
				<img
					class="w-full rounded-t-xl cover-image"
					src={request.img ||
						'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696533773368-image.png'}
				/>

				<div class="p-4">
					<div class="font-bold mb-2">{request.data.description}</div>
					<div class="mb-2">{request.type}</div>

					<p class="opacity-80 line-clamp-3">{request.data.mustHaveWorkflow}</p>
				</div>

				{#if request.isActivated}
					{#if !request.isCompleted}
						<div
							class="w-full text-center py-4 border cursor-pointer"
							on:click={() => completeRequest(request)}
						>
							Complete Request
						</div>
					{/if}

					<div class="w-full text-center py-4 border cursor-pointer">Send message</div>
					<div class="w-full text-center py-4 border cursor-pointer">Open Loom Demo</div>
					<div class="w-full text-center py-4 border rounded-b-xl cursor-pointer">
						Open Figma Prototype
					</div>
				{:else if $currentUser.paymentMethods?.length}
					<button
						class="w-full text-center py-4 border rounded-b-xl cursor-pointer"
						on:click={() => activateRequest(request)}
					>
						Pay $9.99 to Activate
					</button>
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
