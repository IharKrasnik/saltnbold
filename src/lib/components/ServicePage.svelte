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

	export let service;
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">Get your brand design</h2>
		<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
	</div>
</div>

<div class="section-body">
	{#if $currentUser}
		<div class="w-full max-w-[600px]">
			<Form
				form={service.form}
				valueObj={{
					...service.form.defaultValue,
					type: service.key
				}}
				onSubmitted={createRequest}
			/>
		</div>
	{:else}
		<div class="">
			<LoginButton />
		</div>
	{/if}
</div>

<div class="my-12">
	<div class="section-header">
		<div>
			<h2>Some examples</h2>
			<h3 class="mt-2">Here's what we've created for founders like you</h3>
		</div>
	</div>

	<div class="section-body">
		<div class="grid sm:grid-cols-2 gap-4">
			{#each service.portfolio as url}
				<RenderUrl {url} />
			{/each}
		</div>
	</div>
</div>

{#if service.explainers?.length}
	<div class="my-12">
		<div class="section-header">
			<div>
				<h2>What you'll get?</h2>
			</div>
		</div>

		<div class="section-body">
			<div class="grid gap-4">
				{#each service.explainers as url}
					<RenderUrl {url} />
				{/each}
			</div>
		</div>
	</div>
{/if}
