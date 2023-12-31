<script>
	import _ from 'lodash';
	// import ServiceImage from '$lib/components/ServiceImage.svelte';
	import { fly } from 'svelte/transition';
	import currentUser, { isLoading as isCurrentUserloading } from '$lib/stores/currentUser';
	import services from '$lib/stores/services';
	import toDollars from '$lib/helpers/toDollars';
	import showCrispChat from '$lib/helpers/showCrispChat';
	import Icon from '$lib/components/Icon.svelte';
	import FlashIcon from '$lib/icons/flash.svelte';

	let designers = _.shuffle([
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253e634de1359dea96a693_Ellipse%206.png'
		},
		{
			avatarUrl:
				'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703667213958-image.png'
		},
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253e778bc23c60411216b8_Ellipse%207.png'
		},
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253e85c9f60eedf06d758d_Ellipse%2023.png'
		},
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253ec34de1359dea9725b8_Ellipse%2019.png'
		},
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253eb2822bf3f73eba7826_Ellipse%2014.png'
		},
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253ecefda4476ceb958646_Ellipse%2022.png'
		},
		{
			avatarUrl:
				'https://assets-global.website-files.com/64831da00244efd7c8280a6c/65253e3ee55cd50534b412ed_Ellipse%2011.png'
		}
	]);

	let isOnboardingExpaded = true;

	let hoveringService = null;
</script>

<!-- <h1 class="text-2xl font-bold mb-4">
	{#if $currentUser}
		Hi {$currentUser.fullName.split(' ')[0] || ''}! Need new designs?
	{:else}
		Hi! Need new designs?
	{/if}
	Get them now!
</h1> -->

<div class="p-8 rounded-xl mb-8 mt-8" style="outline: 2px #414141 solid">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<FlashIcon />
			<h3 class="ml-2 text-2xl">No calls, no complex proposals, no friction</h3>
		</div>
		<div
			class="cursor-pointer"
			class:opacity-70={isOnboardingExpaded}
			on:click={() => (isOnboardingExpaded = !isOnboardingExpaded)}
		>
			How <b>Fast Design</b> Works?
		</div>
	</div>

	{#if isOnboardingExpaded}
		<div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
			<div>
				<div class="font-semibold mb-2">1. Submit a simple form</div>

				<div>Get chat access in less than 1 minute</div>
			</div>

			<div>
				<div class="font-semibold mb-2">2. Activate your request</div>
				<div>Pre-pay <b class="underline">$9.99</b> to start the work</div>
			</div>
			<div>
				<div class="font-semibold mb-2">3. Get designs & Review</div>
				<div>Get notified via email once we ready</div>
			</div>
			<div>
				<div class="font-semibold mb-2">4. Approve & Pay</div>
				<div>Pay service price to download design files</div>
			</div>
		</div>

		<!-- <hr class="border-white/20 my-8" />

		<div class="mt-4">
			<div class="text-sm py-1 w-full sm:text-center">
				If you're not satisfied with final result, you don't need to pay service price. <span
					class="block cursor-pointer text-blue-300"
					on:click={showCrispChat}>Chat with the team now</span
				>
			</div>
		</div> -->
	{/if}
</div>

<h2 class="mb-8">Send your request, get your design</h2>

<div class="grid grid-cols-1 lg:grid-cols-3 w-full gap-4 w-full">
	{#each $services as service, i}
		<a
			class="group service"
			href={service.href}
			on:mouseenter={() => (hoveringService = service)}
			on:mouseleave={() => (hoveringService = null)}
		>
			<div
				class=" bg-[#141414] rounded-xl bg-zinc-900 relative border border-[#5a5454] flex flex-col justify-between mb-4 transition hover:border-white cursor-pointer"
			>
				<div class="relative" style="height: 156px;">
					<div class="mx-auto">
						<!-- <ServiceImage class="w-full h-full" serviceKey={service.key} /> -->
						<img
							class="service-img w-full rounded-t-xl cover-image object-contain"
							style="margin-left: -9px;; 
							margin-top: -20px;"
							src={`services_images/${service.key}.svg`}
						/>
					</div>
				</div>

				<div class="bg-[#18181b] p-4">
					<div class="font-bold mb-2">
						<h3>
							{service.name}
						</h3>
					</div>

					<div class="opacity-70">{service.description}</div>
				</div>
				<div
					class="bg-[#18181b] border-t border-white/10 rounded-b-xl pt-4 flex justify-between px-4 pb-4 items-center"
				>
					{#if hoveringService?.name !== service.name}
						<div class="text-lg font-semibold">
							{toDollars(service.amount)}
						</div>

						<div class="opacity-80 flex items-center">
							{#if service.time}
								<Icon size="15" name="lightning" class="mr-2" />{service.time.label}
							{/if}
						</div>
					{:else if service.activateAmount}
						<div in:fly={{ duration: 150, y: 20 }}>
							Activate for <b class="">{toDollars(service.activateAmount)}</b>
						</div>
						<div in:fly={{ duration: 150, y: 20 }}>⚡️</div>
					{:else}
						<div in:fly={{ duration: 150, y: 20 }}>Submit your brief</div>
						<div in:fly={{ duration: 150, y: 20 }}>🤓</div>
					{/if}
				</div>
			</div>
		</a>
		{#if i === $services.length - 1}
			<a
				href="https://cal.com/team/salt-and-bold/intro-call?date=2023-12-27&month=2023-12"
				target="_blank"
				class="group rounded-xl py-8 border border-zinc-600 flex flex-col mb-4 bg-[#18181b] flex flex-col justify-center items-center transition hover:boder-white hover:bg-green-brand hover:text-black cursor-pointer"
				datas-cal-link="team/salt-and-bold/intro-call-30-min"
			>
				<div class="text-2xl opacity-80" data-cal-link="team/salt-and-bold/intro-call-30-min">
					Custom Design
				</div>
				<div class="flex flex-wrap mt-4 justify-center sm:w-[50%]">
					{#each designers as designer}
						<img
							src={designer.avatarUrl}
							class="w-[40px] h-[40px] rounded-full grayscale-dimmed group-hover:grayscale-0"
							data-cal-link="team/salt-and-bold/intro-call-30-min"
							style="margin-right: -10px;"
						/>
					{/each}
				</div>
				<div class="text-lg font-bold mt-4 opacity-90">$1200.00/week</div>
				<div class="mt-2 opacity-90">Book a free call</div>
			</a>
		{/if}
	{/each}
</div>

<style>
	.service .service-img {
		transition: all linear 0.025s;
		@apply scale-50;
	}

	.service:hover .service-img {
	}

	.cover-image {
		height: 200px;
		width: 100%;
		object-fit: contain;
	}
</style>
