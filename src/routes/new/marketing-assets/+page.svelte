<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import RenderUrl from '$lib/components/RenderUrl.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	import { marketingServices, marketingPortfolio } from '$lib/stores/services';

	import { fly } from 'svelte/transition';
	import services from '$lib/stores/services';
	import toDollars from '$lib/helpers/toDollars';
	import showCrispChat from '$lib/helpers/showCrispChat';
	import Icon from '$lib/components/Icon.svelte';
	import FlashIcon from '$lib/icons/flash.svelte';

	let form = {
		cacheId: 'marketing_assets',
		buttonText: 'Start Designing',
		fields: [
			{
				name: 'description',
				title: `What design do you need?`,
				description: '',
				placeholder: `I want to design a logo for my product Momentum. It will help founders to monitor their growth daily.`,
				type: 'long-text',
				hints: [`Please share the links to existing assets, if any`],
				isRequired: true
			},
			{
				name: 'references',
				title: `Please send few examples (urls) of designs that you like`,
				description: '',
				placeholder: `I love how clean and simple Linear brand is (https://linear.app)`,
				type: 'long-text',
				// hint: `The more details you share, the better prototype you'll get`,
				isRequired: true
			}
		]
	};

	let request = {
		type: 'marketing_assets',
		description: '',
		references: ''
	};

	let selectedService = null;
	let hoveringService = null;
</script>

{#if selectedService}
	<div class="section-header">
		<div>
			<h2 class="text-xl font-bold">Get your brand design</h2>
			<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
		</div>
	</div>

	<div class="section-body">
		<div class="w-full max-w-[600px]">
			<Form {form} valueObj={request} onSubmitted={createRequest} />
		</div>
	</div>
	<div class="my-12">
		<div class="section-header">
			<div>
				<h2>Marketing assets examples</h2>
				<h3 class="mt-2">Here's what we've created for founders like you</h3>
			</div>
		</div>

		<!-- <div class="section-body">
			<div>
				<h2 class="mb-4">Logos</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each marketingPortfolio.logos as url}
						<RenderUrl {url} />
					{/each}
				</div>
			</div>

			<div>
				<h2 class="mb-4 mt-8">Icons</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each marketingPortfolio.icons as url}
						<RenderUrl {url} />
					{/each}
				</div>
			</div>

			<div>
				<h2 class="mb-4 mt-8">Illustrations</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each marketingPortfolio.illustrations as url}
						<RenderUrl {url} />
					{/each}
				</div>
			</div>
		</div> -->

		<!-- 
	<div class="section-body grid sm:grid-cols-2 gap-4">
		<RenderUrl
			url="https://cdn.dribbble.com/userupload/8991636/file/original-ce8aa57c21e12a834b2aad762fe5b1ad.png?resize=1504x1128"
		/>

		<RenderUrl
			url="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1698783852535-image.png"
		/>
		<RenderUrl url="https://pbs.twimg.com/media/F7v8eInWgAAVf-K?format=jpg&name=large" />

		<RenderUrl
			url="https://cdn.dribbble.com/userupload/10800002/file/original-cddf211e48faa78a9df60d4448363d32.png?resize=2048x1536"
		/>
		<RenderUrl
			url="https://cdn.dribbble.com/userupload/9989970/file/original-918b309aa9d6c9c5f01c76837cc5cd3a.png?resize=2048x1536"
		/>
		<RenderUrl
			url="https://cdn.dribbble.com/userupload/8137499/file/original-4da17a928f891ea4f57fb8a43599a0ee.jpg?crop=361x0-2598x1678&resize=1000x750&vertical=center"
		/>
		<RenderUrl
			url="https://blog.paralect.com/storage/app/uploads/public/5e2/06d/2e9/5e206d2e9bcc9372946966.png"
		/>
		<RenderUrl
			url="https://blog.paralect.com/storage/app/uploads/public/63a/1b1/379/63a1b1379a685165502527.png"
		/>
		<RenderUrl
			url="https://blog.paralect.com/storage/app/uploads/public/613/1f1/294/6131f12943e2e057298504.png"
		/>
		<RenderUrl
			url="https://blog.paralect.com/storage/app/uploads/public/60a/673/c57/60a673c578c84710585563.png"
		/>
	</div> -->
	</div>
{:else}
	<div class="text-xl font-bold mb-8">What marketing design do you need?</div>

	<div class="grid sm:grid-cols-3 gap-4">
		{#each marketingServices as service}
			<a
				on:mouseenter={() => (hoveringService = service)}
				on:mouseleave={() => (hoveringService = null)}
				on:click={() => {
					selectedService = service;
				}}
				class="_card"
				href={service.href}
			>
				<div class="relative w-full" style="aspect-ratio: 286/214;">
					<!-- <ServiceImage class="w-full h-full" serviceKey={service.key} /> -->
					<img class="w-full rounded-t-xl cover-image object-contain" src={service.img} />
				</div>

				<div class="bg-[#18181b] p-4">
					<div class="font-bold mb-2">
						<h3>
							{service.name}
						</h3>
					</div>

					<div class="opacity-80">{service.description}</div>
				</div>
				<div
					class="bg-[#18181b] border-t border-white/10 rounded-b-xl pt-4 flex justify-between px-4 pb-4 items-center h-[62px]"
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
			</a>
		{/each}
		<!-- <div class="_card">
			<img class="w-full rounded-t-xl" src={portfolio.logos[0]} />
			<div class="text-lg font-bold p-4">Logo</div>
		</div>

		<div>
			<div>Illustrations</div>
			<img class="w-full" src={portfolio.illustrations[0]} />
		</div>

		<div>
			<div>Icons</div>
			<img class="w-full" src={portfolio.icons[0]} />
		</div> -->
	</div>
	<div class="my-8 sm:my-16">
		<div class="w-full text-xl mb-2">Need more design or have some questions?</div>

		<span class="block cursor-pointer text-blue-300" on:click={showCrispChat}>Chat with us</span>
	</div>
{/if}

<style>
	._card {
		@apply bg-[#141414] rounded-xl bg-zinc-900 relative border border-[#5a5454] flex flex-col justify-between mb-4 transition hover:border-white cursor-pointer;
	}

	._card img {
		filter: grayscale(60%);
		@apply transition;
	}

	._card:hover img {
		filter: grayscale(0);
	}
</style>
