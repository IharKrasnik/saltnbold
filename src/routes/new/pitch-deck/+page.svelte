<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';

	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'pitch_deck',
		buttonText: 'Get My Pitch Deck',
		fields: [
			{
				name: 'name',
				title: `What's your product name?`,
				description: '',
				placeholder: `MyGreatProduct`,
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
				title: `Describe your product idea and traction`,
				rows: 8,
				description: '',
				placeholder: `I'm building an app that will allow startup founders to launch their landing page in seconds with AI. We've launched a landing page for validation and got 1k+ users in waitlist.`,
				type: 'long-text',
				hints: [
					`What problem do you solve for what target audience?`,
					`What traction do you have so far? (specific number of users or views)`,
					`How will you acquire users?`,
					`Please share the links to existing assets, if any`
				],
				isRequired: true
			}
		]
	};

	let request = {
		type: 'pitch_deck',
		name: '',
		websiteUrl: '',
		description: ''
	};
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">Get your pitch deck</h2>
		<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
	</div>
</div>

<div class="section-body">
	{#if $currentUser}
		<div class="w-full max-w-[600px]">
			<Form {form} valueObj={request} onSubmitted={createRequest} />
		</div>
	{:else}
		<LoginButton />
	{/if}
</div>
