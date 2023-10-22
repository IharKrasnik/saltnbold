<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

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
		type: 'logo_branding',
		description: '',
		references: ''
	};
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
			<Form {form} valueObj={request} onSubmitted={createRequest} />
		</div>
	{:else}
		<div class="">
			<LoginButton />
		</div>
	{/if}
</div>
