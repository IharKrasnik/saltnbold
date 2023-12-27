<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import requests, { isLoading as isRequestsLoading } from '$lib/stores/requests';
	import Loader from '$lib/components/Loader.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import FeatherIcon from '$lib/components/FeatherIcon.svelte';

	import HomeIcon from '$lib/icons/home.svelte';
	import GiftIcon from '$lib/icons/gift.svelte';
	import FlashIcon from '$lib/icons/flash.svelte';
</script>

<div class="mt-4 text-lg">
	{#if $currentUser?.requestsCount}
		<a href="/my-designs" in:fly={{ y: -50, duration: 150 }}>
			<div
				class="menuitem flex items-center py-2"
				class:active={$page.url.pathname === '/' || $page.url.pathname.includes('my-designs')}
			>
				<HomeIcon
					class={$page.url.pathname === '/' || $page.url.pathname.includes('my-designs')
						? 'active'
						: ''}
				/>

				<div class="ml-2">
					My Designs {$currentUser.requestsCount}
				</div>
			</div>
		</a>
	{/if}

	<a href="/new">
		<div
			class="menuitem flex items-center py-2"
			class:active={$page.url.pathname === '/' || $page.url.pathname.includes('new')}
		>
			<FlashIcon
				class={$page.url.pathname === '/' || $page.url.pathname.includes('new') ? 'active' : ''}
			/>
			<div class="ml-2">Get Fast Design</div>
		</div>
	</a>

	<a href="/tools" class="menuitem" class:active={$page.url.pathname.startsWith('/tools')}>
		<div class=" flex items-center py-2">
			<GiftIcon class={$page.url.pathname.startsWith('/tools') ? 'active' : ''} />

			<div class="ml-2">Free Tools</div>
		</div>
	</a>

	<a
		href="/referrals"
		class="sm:hidden menuitem"
		class:active={$page.url.pathname.startsWith('/referrals')}
	>
		<div class=" flex items-center py-2">
			<Icon
				color={null}
				size="15"
				name="upload"
				class="svgicon {$page.url.pathname.startsWith('/referrals') ? 'active' : ''}"
			/>
			<div class="ml-2">
				<div>Refer Your Friends</div>
				<div class="text-sm opacity-80">Earn 20% commission</div>
			</div>
		</div>
	</a>

	<hr class="mt-4 py-2 opacity-30" />

	<div class="mt-2 text-sm opacity-80">
		Salt & Bold is a result-driven design studio for startups
	</div>

	<div class="mt-4 flex gap-2">
		<a class="opacity-70 hover:opacity-100" href="https://twitter.com/saltnbold" target="_blank">
			<FeatherIcon size="20" name="twitter" />
		</a>
		<a
			class="opacity-70 hover:opacity-100"
			href="https://www.linkedin.com/company/saltnbold"
			target="_blank"
		>
			<FeatherIcon size="20" name="linkedin" />
		</a>
		<a
			class="opacity-70 hover:opacity-100"
			href="https://www.instagram.com/saltnbold"
			target="_blank"
		>
			<FeatherIcon size="20" name="instagram" />
		</a>
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
