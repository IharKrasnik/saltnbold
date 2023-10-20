<script>
	import '../app.css';
	import Loader from '$lib/components/Loader.svelte';
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
</svelte:head>

<div class="container flex mx-auto my-8 h-full">
	<link rel="icon" href="favicon.png" />

	<div class="mr-8">
		<div class="w-[250px] bg-zinc-900 rounded-xl p-4 flex-shrink-0">
			<div class="flex items-center justify-between">
				<a href="/"><img class="w-[50px] rounded-full" src="/salt_logo.png" /></a>
				<div>
					{#if $currentUser}
						<img src={$currentUser.avatarUrl} class="rounded-full w-[40px] h-[40px]" />
					{/if}
				</div>
			</div>
			<div class="mt-8 text-lg">
				<a href="/my-designs">
					<div
						class="py-2"
						class:opacity-30={!$isRequestsLoading && !$requests.length}
						class:font-bold={$page.url.pathname === '/' ||
							$page.url.pathname.includes('my-designs')}
					>
						My Designs {#if $isRequestsLoading}
							<Loader class="ml-2" />
						{:else}
							{$requests.length || ''}
						{/if}
					</div>
				</a>

				<a href="/new">
					<div
						class="py-2"
						class:font-bold={$page.url.pathname === '/' || $page.url.pathname.includes('new')}
					>
						Get Fast Design ⚡️
					</div>
				</a>

				<div class="py-2">Free Tools</div>

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

	<div class="w-full">
		{#if !$isCurrentUserLoading && !$isRequestsLoading}
			<slot />
		{/if}
	</div>
</div>
