<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { get } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import requests, { isLoading as requestsIsLoading } from '$lib/stores/requests';

	if (browser) {
		if (!$isCurrentUserLoading && $currentUser) {
			get('requests').then(({ results }) => {
				requests.set(results);
				requestsIsLoading.set(false);
			});
		} else {
			requestsIsLoading.set(false);
		}
	}
</script>

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
				<a href="/requests">
					<div
						class="py-2"
						class:font-bold={$page.url.pathname === '/' ||
							$page.url.pathname.includes('requests') ||
							$page.url.pathname.includes('new')}
					>
						My Requests
					</div>
				</a>

				<div class="py-2">Free Templates</div>

				<hr class="mt-4 py-2 opacity-30" />

				<div class="mt-2 text-sm opacity-80">
					Salt n Bold is a fast design studio built for startups 💙
				</div>
			</div>
		</div>

		<button class="mt-8 w-full" data-cal-link="team/salt-and-bold/intro-call-30-min">
			Get Custom Design
		</button>

		<button class="mt-4 w-full" style="background: none;"> Refer a friend </button>
	</div>

	<div class="w-full">
		{#if !$isCurrentUserLoading && !$requestsIsLoading}
			<slot />
		{/if}
	</div>
</div>
