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
				title: `What animation do you need to create? How will you use it?`,
				description: '',
				placeholder: `I want to animate images on my website to add slight cool effect + I want to use this animation in social networks to promote my brand. Here's my website: somebrand.com. It would be cool to add some sci-fi vibes to it if possible!`,
				type: 'long-text',
				isRequired: true
			},
			{
				name: 'references',
				title: `Please send few examples (urls) of similar animations`,
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
	<h2 class="text-xl font-bold">Get your motion design fast</h2>
	<h3 class="text-lg mt-2">Please share as much specific info as you can to get us started.</h3>
</div>

<div class="section-body">
	{#if $currentUser}
		<div class="w-full max-w-[600px]">
			<Form {form} valueObj={request} onSubmitted={createRequest} />

			<!-- <div class="mb-8">
			<label>What's your website?</label>
			<input placeholder="mysite.com" class="w-full" />

			<div class="form-hint">💡 Leave empty if you don't have a website yet</div>
		</div>

		<div class="mb-8">
			<label>What problem do you solve?</label>

			<textarea
				placeholder="I'm building a marketplace like Trustpilot for fashion lovers. It helps people to find world-class fashion specialists and get their service. You can register as fashion specialist or fashion lover."
				rows="4"
				class="w-full"
			/>

			<div class="form-hint">💡 The more details you share, the better prototype you'll get</div>
		</div>

		<div class="mb-8">
			<label>What is 1 must-have workflow?</label>

			<textarea
				placeholder="Fashion seekers should be able to find specialist in their area and book their service. Once service is done they can leave a feedback."
				rows="4"
				class="w-full"
			/>

			<div class="form-hint">
				💡 Focus single outcome to get better prototype. Decide what actually matters for your
				product to deliver the core value.
			</div>
		</div>

		<div class="mb-8">
			<label>Design References</label>

			<textarea
				placeholder="competitorwebsite.com — I love their website; anotherwebsite2.com — I love how simple their UI is and their color scheme; website3 — the most popular competitor. Please keep the fonts large and give lots of white space."
				rows="4"
				class="w-full"
			/>

			<div class="form-hint">
				💡 Be specific about your competitors and what exactly you love about them
			</div>
		</div> -->
		</div>
	{:else}
		<div class="mt-8">
			<a href={GOOGLE_LOGIN_URL}>
				<button class="secondary">
					<svg
						class="mr-2"
						width="17"
						height="16"
						viewBox="0 0 17 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_251_709)">
							<path
								d="M16.3299 8.18C16.3299 7.65333 16.2833 7.15333 16.2033 6.66667H8.66992V9.67334H12.9833C12.7899 10.66 12.2233 11.4933 11.3833 12.06V14.06H13.9566C15.4633 12.6667 16.3299 10.6133 16.3299 8.18Z"
								fill="#4285F4"
							/>
							<path
								d="M8.66979 16C10.8298 16 12.6365 15.28 13.9565 14.06L11.3831 12.06C10.6631 12.54 9.74979 12.8333 8.66979 12.8333C6.58312 12.8333 4.81645 11.4267 4.18312 9.52667H1.52979V11.5867C2.84312 14.2 5.54312 16 8.66979 16Z"
								fill="#34A853"
							/>
							<path
								d="M4.18326 9.52667C4.01659 9.04667 3.92992 8.53333 3.92992 8C3.92992 7.46667 4.02326 6.95334 4.18326 6.47334V4.41334H1.52992C0.983255 5.49334 0.669922 6.70667 0.669922 8C0.669922 9.29333 0.983255 10.5067 1.52992 11.5867L4.18326 9.52667Z"
								fill="#FBBC05"
							/>
							<path
								d="M8.66979 3.16667C9.84979 3.16667 10.9031 3.57334 11.7365 4.36667L14.0165 2.08667C12.6365 0.793334 10.8298 0 8.66979 0C5.54312 0 2.84312 1.8 1.52979 4.41334L4.18312 6.47334C4.81645 4.57334 6.58312 3.16667 8.66979 3.16667Z"
								fill="#EA4335"
							/>
						</g>
						<defs>
							<clipPath id="clip0_251_709">
								<rect width="16" height="16" fill="white" transform="translate(0.5)" />
							</clipPath>
						</defs>
					</svg>
					Continue with Google</button
				></a
			>
		</div>
	{/if}
</div>
