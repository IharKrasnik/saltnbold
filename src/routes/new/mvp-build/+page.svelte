<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'mvp_build',
		buttonText: 'Build my MVP',
		fields: [
			{
				name: 'name',
				title: `What's your product name?`,
				description: '',
				placeholder: `MyAmazingProduct`,
				type: 'short-text',

				isRequired: true
			},
			{
				name: 'description',
				title: `Describe your product`,
				rows: 8,
				description: '',
				placeholder: `I'm building an app that will allow startup founders to launch their landing page in seconds. AI will help to generate copy from simple user input.`,
				type: 'long-text',
				hints: [
					`What problem do you solve for what target audience?`,
					`Please share the links to existing assets, if any`
				],
				isRequired: true
			},
			{
				name: 'references',
				title: `What are some apps that you like?`,
				description: '',
				placeholder: `I love how interface of Linear because it's straightforward and clean (https://linear.app).`,
				type: 'long-text',
				// hint: `The more details you share, the better prototype you'll get`,
				isRequired: true
			}
		]
	};

	let request = {
		type: 'mvp_build',
		name: '',
		description: '',
		references: ''
	};
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">Build your MVP in 1 month</h2>
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
