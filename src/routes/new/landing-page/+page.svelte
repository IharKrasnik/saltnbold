<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'landing_page',
		buttonText: 'Get My Landing Page',
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
				placeholder: `I'm building an app that will allow startup founders to launch their landing page in seconds with and generate AI.`,
				type: 'long-text',
				hints: [
					`What problem do you solve for what target audience?`,
					`Please share the links to existing assets, if any`
				],
				isRequired: true
			},
			{
				name: 'references',
				title: `What are some websites that you like?`,
				description: '',
				placeholder: `I love how clean and simple Linear landing page is (https://linear.app). Also love https://cal.com branding.`,
				type: 'long-text',
				// hint: `The more details you share, the better prototype you'll get`,
				isRequired: true
			}
		]
	};

	let request = {
		type: 'landing_page',
		name: '',
		description: '',
		references: ''
	};
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">Get your landing page</h2>
		<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
	</div>
</div>

<div class="section-body">
	<div class="w-full max-w-[600px]">
		<Form {form} valueObj={request} onSubmitted={createRequest} />
	</div>
</div>
