<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'landing_page',
		buttonText: 'Get marketing assets',
		fields: [
			{
				name: 'name',
				title: `Your Momentum page URL`,
				description: '',
				placeholder: `mmntm.me/myproduct or myproduct.mmntm.page`,
				type: 'short-text',

				isRequired: true
			},
			{
				name: 'description',
				title: `Describe your request and share references`,
				rows: 8,
				description: '',
				placeholder: ``,
				type: 'long-text',
				isRequired: true
			}
		]
	};

	let request = {
		type: 'marketing_assets_promo',
		name: '',
		description: '',
		references: ''
	};
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">
			Get marketing assets to promote your <a target="_blank" href="https://momentum.page"
				>Momentum</a
			> page
		</h2>
		<h3 class="text-lg">
			Get FREE Twitter+LinkedIn banner and template for your social media posts!
		</h3>
	</div>
</div>

<div class="section-body">
	<div class="w-full max-w-[600px]">
		<Form {form} valueObj={request} onSubmitted={createRequest} />
	</div>
</div>

<img
	src="https://pbs.twimg.com/media/GAvzsZ-XQAATrZc?format=png&name=medium"
	class="rounded shadow-lg max-w-[400px] mx-auto mt-8"
/>
