<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'product_demo_video',
		buttonText: 'Get My Video',
		fields: [
			{
				name: 'name',
				title: `What's your product name?`,
				placeholder: 'MyAwesomeProduct',
				type: 'short-text',
				isRequired: true
			},
			{
				name: 'websiteUrl',
				title: `What's your website?`,
				placeholder: 'https://myproduct.com',
				description: '',
				type: 'url',
				hints: [`Leave empty if you don't have a website yet`],
				isRequired: false
			},
			{
				name: 'description',
				title: `What problem do you solve?`,
				description: '',
				placeholder: `I'm building an asset management system for companies to track their equipment. We work with QR codes a lot to scan inventory.`,
				type: 'long-text',
				hints: [`The more details you share, the better prototype you'll get`],
				isRequired: true
			},
			{
				name: 'mustHaveWorkflow',
				title: `What workflow should we visualize?`,
				description: '',
				placeholder: `I want to show how simple it is to generate QR codes in different sizes for print`,
				type: 'long-text',
				hints: [
					`Describe in step by step how you see the video`,
					`Focus single outcome to get better video`
				],
				isRequired: true
			}
		]
	};

	let request = {
		type: 'ui_ux_prototype',
		websiteUrl: '',
		description: '',
		mustHaveWorkflow: '',
		references: ''
	};
</script>

<div class="section-header">
	<h2 class="text-xl font-bold">Get your product demo video</h2>
	<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
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
