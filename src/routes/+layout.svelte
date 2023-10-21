<script>
	import '../app.css';
	import Loader from '$lib/components/Loader.svelte';

	import HomeIcon from '$lib/icons/home.svelte';
	import GiftIcon from '$lib/icons/gift.svelte';
	import FlashIcon from '$lib/icons/flash.svelte';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { get } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import requests, { isLoading as isRequestsLoading } from '$lib/stores/requests';

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

<div class="lg:hidden block p-4">
	<div class="w-full flex items-center justify-between">
		<a href="/"><img class="w-[50px] rounded-full" src="/salt_logo.png" /></a>
		{#if $currentUser}
			<img src={$currentUser.avatarUrl} class="rounded-full w-[40px] h-[40px]" />
		{/if}
	</div>
</div>

<div class="container flex mx-auto my-8 h-full">
	<div class="mr-8 ml-8 lg:ml-0 hidden lg:block">
		<div class="w-[250px] bg-zinc-900 rounded-xl p-4 flex-shrink-0">
			<div class="flex items-center justify-between">
				<a href="/"><img class="w-[50px] rounded-full" src="/salt_logo.png" /></a>
				<div>
					{#if $currentUser}
						<img src={$currentUser.avatarUrl} class="rounded-full w-[40px] h-[40px]" />
					{/if}
				</div>
			</div>
			<div class="mt-4 text-lg">
				<a href="/my-designs">
					<div
						class="menuitem flex items-center py-2"
						class:opacity-30={!$isRequestsLoading && !$requests.length}
						class:active={$page.url.pathname === '/' || $page.url.pathname.includes('my-designs')}
					>
						<HomeIcon
							class={$page.url.pathname === '/' || $page.url.pathname.includes('my-designs')
								? 'active'
								: ''}
						/>

						<div class="ml-2">
							My Designs {#if $isRequestsLoading}
								<Loader class="ml-2" />
							{:else}
								{$requests.length || ''}
							{/if}
						</div>
					</div>
				</a>

				<a href="/new">
					<div
						class="menuitem flex items-center py-2"
						class:active={$page.url.pathname === '/' || $page.url.pathname.includes('new')}
					>
						<FlashIcon
							class={$page.url.pathname === '/' || $page.url.pathname.includes('new')
								? 'active'
								: ''}
						/>
						<div class="ml-2">Get Fast Design</div>
					</div>
				</a>

				<a href="/tools" class="menuitem" class:active={$page.url.pathname === '/tools'}>
					<div class=" flex items-center py-2">
						<GiftIcon class={$page.url.pathname === '/tools' ? 'active' : ''} />

						<div class="ml-2">Free Tools</div>
					</div>
				</a>
				<hr class="mt-4 py-2 opacity-30" />

				<div class="mt-2 text-sm opacity-80">
					Salt n Bold is a result-driven design studio for startups 💙
				</div>
			</div>
		</div>

		<button class="mt-8 w-full" data-cal-link="team/salt-and-bold/intro-call-30-min">
			Get Custom Design
		</button>

		<!-- <button class="mt-4 w-full" style="background: none;"> Refer a friend </button> -->
	</div>

	<div class="w-full p-4 lg:p-0">
		{#if !$isCurrentUserLoading && !$isRequestsLoading}
			<slot />
		{/if}
	</div>
</div>

<style>
	.menuitem {
		color: #b0b0be;
		@apply transition;
	}

	.menuitem:hover {
		color: #fff;
	}

	.menuitem.active {
		color: #fff;
		font-weight: 500;
	}
</style>
