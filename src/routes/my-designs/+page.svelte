<script>
	import { get, post } from '$lib/api';
	import { goto } from '$app/navigation';
	import Loader from '$lib/components/Loader.svelte';
	import GetNewDesign from '$lib/components/GetNewDesign.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import tooltip from '$lib/use/tooltip';
	import currentUser from '$lib/stores/currentUser';
	import requests from '$lib/stores/requests';
	import services, { marketingServices, formatRequestType } from '$lib/stores/services';
	import showCrispChat from '$lib/helpers/showCrispChat';

	if (browser) {
	}

	let requestTypes = {
		ui_ux_prototype: 'UI/UX Prototype'
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
</script>

<div class="flex justify-between">
	<h1 class="mb-8">My Designs</h1>
	<a href="/new"><button>Get New Design ⚡️</button></a>
</div>

{#if !$requests.length}
	<GetNewDesign />
{/if}

<div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 w-full">
	{#each $requests as request}
		<div>
			<a href="/my-designs/{request._id}">
				<div
					class="rounded-xl border border-[#242424] flex flex-col justify-between mb-4 transition"
				>
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

						{#if request.isActivated && request.amount}
							<div class="absolute left-4 top-4 z-10 px-2 rounded-lg bg-zinc-600">
								Revisions: {request.reviews?.length || 0}/{request.totalReviewsCount || 2}
							</div>
						{/if}
						<img
							class="w-full rounded-t-xl cover-image absolute h-full object-cover"
							src={request.img ||
								$services.find((r) => r.key === request.type)?.img ||
								(marketingServices.find((r) => r.key === request.type) &&
									marketingServices.find((r) => r.key === request.type).portfolio[0])}
						/>
					</div>

					<div class="p-4">
						<h3 class="font-bold mb-2">{request.project.name || ''}</h3>

						<p class="opacity-80 line-clamp-2">{request.data.description}</p>
					</div>
				</div>
			</a>

			{#if !$currentUser.isAdmin && !$currentUser.paymentMethods?.length}
				<button
					class="w-full text-center py-4 border rounded-xl cursor-pointer"
					on:click={() => addPaymentMethod()}
				>
					Add Card To Activate
				</button>
			{/if}
		</div>
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
