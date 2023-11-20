<script>
	import { GOOGLE_LOGIN_URL } from '$lib/env';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'motion_animation',
		buttonText: 'Get Motion Animation',
		fields: [
			{
				name: 'description',
				title: `What video do you need to create? How will you use it?`,
				description: '',
				example: `I want to animate images on my website to add slight cool effect + I want to use this animation in social networks to promote my brand. Here's my website: somebrand.com. It would be cool to add some sci-fi vibes to it if possible!`,
				type: 'long-text',
				isRequired: true
			},
			{
				name: 'references',
				title: `Please send few examples (urls) of similar videos`,
				description: '',
				placeholder: `Here is some concept that looks similar: https://www.instagram.com/p/CyBTlSdMJHp`,
				type: 'long-text',
				isRequired: true
			}
		]
	};

	let request = {
		type: 'motion_animation',
		description: '',
		references: ''
	};
</script>

<div class="section-header">
	<div>
		<h2 class="text-xl font-bold">Get your video ads fast</h2>
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
