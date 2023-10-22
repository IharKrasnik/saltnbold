<script>
	import '../app.css';
	import { fade, fly } from 'svelte/transition';
	import Loader from '$lib/components/Loader.svelte';
	import NavLinks from '$lib/components/NavLinks.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { get } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import requests, { isLoading as isRequestsLoading } from '$lib/stores/requests';
	let scrollY;

	if (browser) {
		if (!$isCurrentUserLoading) {
			if ($currentUser) {
				window.$crisp.push(['set', 'user:email', $currentUser.email]);
				get('requests').then(({ results }) => {
					requests.set(results);
					isRequestsLoading.set(false);
				});
			} else {
				isRequestsLoading.set(false);
			}
		}
	}
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>{$page.data.ogTitle}</title>
	<meta name="title" content={$page.data.title || $page.data.ogTitle} />
	<meta name="description" content={$page.data.ogDescription} />
	<meta name="og:description" content={$page.data.ogDescription} />

	<meta name="twitter:title" content={$page.data.ogTitle} />
	<meta name="twitter:description" content={$page.data.ogDescription} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:image" content={$page.data.ogImage} />

	<link rel="icon" href="logo.svg" />

	<meta name="og:image" content={$page.data.ogImage} />
	<link rel="icon" href="favicon.png" />
</svelte:head>

<SvelteToast />

<div class="lg:hidden block p-4">
	<div class="w-full flex items-center justify-between">
		<a href="/" class="block w-[50px] h-[50px]"
			><img class="w-[50px] rounded-full" src="/salt_logo.png" /></a
		>
		{#if $currentUser}
			<img src={$currentUser.avatarUrl} class="rounded-full w-[40px] h-[40px]" />
		{/if}
	</div>
</div>

<div class="container mx-auto lg:mt-8 h-full">
	<div class="fixed w-[256px] mr-8 ml-8 lg:ml-2 hidden lg:block">
		<div class="bg-zinc-900 border border-[#242424] rounded-xl p-4 flex-shrink-0">
			<div class="flex items-center justify-between">
				<a href="/"><img class="w-[50px] rounded-full" src="/salt_logo.png" /></a>
				<div>
					{#if $currentUser}
						<img src={$currentUser.avatarUrl} class="rounded-full w-[40px] h-[40px]" />
					{/if}
				</div>
			</div>
			<NavLinks />
		</div>

		<a
			href="/referrals"
			class:active={$page.url.pathname.startsWith('/referrals')}
			class="nav block w-full bg-zinc-900 border border-[#242424] cursor-pointer p-4 rounded-xl mt-8 hover:bg-green-400 hover:text-black transition"
		>
			<div class="block">Share With Friends 💙</div>
			<div class="opacity-80 text-sm mt-2">
				Earn 20% of the payments from people you've referred to Salt & Bold
			</div>
		</a>

		{#if !$isCurrentUserLoading}
			<div class="mt-8" in:fade>
				{#if $currentUser}
					<button class=" w-full secondary" data-cal-link="team/salt-and-bold/intro-call-30-min">
						Get Custom Design
					</button>
				{:else}
					<LoginButton class="w-full" text="Log In With Google" />
				{/if}
			</div>
		{:else}
			<div class="w-full mt-8 flex justify-center">
				<Loader />
			</div>
		{/if}
	</div>

	<div class=" p-4 lg:p-0 lg:ml-[304px]">
		{#if !$isCurrentUserLoading && !$isRequestsLoading}
			<slot />
		{/if}
	</div>

	{#if !$isCurrentUserLoading && !$currentUser}
		{#if scrollY > 100}
			<div class="lg:hidden fixed bottom-16 w-full" in:fly={{ y: 50, duration: 150 }}>
				{#if !$page.url.pathname.includes('/new/')}{/if}
				<LoginButton class="mx-auto" text="Log In With Google" />
			</div>
		{/if}
	{/if}

	<div class="lg:hidden p-8 bg-zinc-900 min-h-screen">
		<div class="font-bold text-lg">Salt & Bold</div>
		<div class="opacity-80">Product Design Studio</div>
		<NavLinks />
	</div>
</div>

<style>
	.nav {
		@apply text-[#b0b0be];
	}
	.nav.active {
		@apply text-white;
	}

	.nav:hover {
		@apply text-black;
	}
</style>
