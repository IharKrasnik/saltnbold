<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: '3d_icon',
		buttonText: 'Get My Icon',
		fields: [
			{
				name: 'description',
				title: `What icon do you need?`,
				rows: 8,
				description: '',
				placeholder: `I want to design a "sugar bowl" icon for the hero section of my website!`,
				type: 'long-text',
				hints: [`Describe how do you see the icon in detail`, `How will you use it?`],
				isRequired: true
			},
			{
				name: 'references',
				title: `What are some icons that you like?`,
				description: '',
				placeholder: `I love salt shaker icon from the main page here: saltnbold.com`,
				type: 'long-text'
				// hint: `The more details you share, the better prototype you'll get`,
				// isRequired: true
			}
		]
	};

	let request = {
		type: '3d_icon',
		name: '',
		description: '',
		references: ''
	};
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">Design 3D icon</h2>
		<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
	</div>
</div>

<div class="section-body">
	<div class="w-full max-w-[600px]">
		<Form {form} valueObj={request} onSubmitted={createRequest} />
	</div>
</div>
