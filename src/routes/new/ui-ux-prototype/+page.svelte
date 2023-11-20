<script>
	import LoginButton from '$lib/components/LoginButton.svelte';
	import { post } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import Form from '$lib/components/Form.svelte';
	import RenderUrl from '$lib/components/RenderUrl.svelte';
	import requests, { createRequest } from '$lib/stores/requests';
	import { formatRequestType, portfolio } from '$lib/stores/services';
	import FeatherIcon from '$lib/components/FeatherIcon.svelte';

	import { goto } from '$app/navigation';

	let form = {
		cacheId: 'ui-ux-prototype',
		buttonText: 'Get My Prototype',
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
			// {
			// 	name: 'description',
			// 	title: `What problem do you solve?`,
			// 	description: '',
			// 	placeholder: `I'm building a marketplace like Trustpilot for fashion lovers. It helps people to find world-class fashion specialists and get their service. You can register as fashion specialist or fashion lover.`,
			// 	type: 'long-text',
			// 	hints: [`The more details you share, the better prototype you'll get`],
			// 	isRequired: true
			// },
			{
				name: 'mustHaveWorkflow',
				title: `What is 1 must-have workflow?`,
				description: '',
				example: `I'm building a marketplace like Trustpilot for fashion lovers. Fashion seekers should be able to find specialist in their area and book their service. Once service is done they can leave a feedback.`,
				type: 'long-text',
				hints: [
					`Focus single outcome to get better prototype. Decide what actually matters for your product to deliver the core value.`
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
	<div>
		<h2 class="text-xl font-bold">Get your UI/UX prototype in 48 hours</h2>
		<h3 class="text-lg mt-2">
			So, what are you building? Please share as much specific info as you can to get us started.
		</h3>
	</div>
</div>

<div class="section-body">
	{#if $currentUser}
		<div class="w-full max-w-[600px]">
			<Form {form} valueObj={request} onSubmitted={createRequest} />
		</div>
	{:else}
		<div><LoginButton /></div>
	{/if}
</div>

<div class="my-12">
	<div class="section-header">
		<div>
			<h2>What you'll get?</h2>
		</div>
	</div>

	<div class="section-body">
		<div class="grid sm:grid-cols-3 gap-4">
			<div>
				<FeatherIcon name="cpu" />
				<div class="font-semibold mt-2">Dev-Ready Figma File</div>
				<div>Use your design files to develop your application</div>
			</div>
			<div>
				<FeatherIcon name="layout" />
				<div class="font-semibold mt-2">1 Flow — Up to 10 screens</div>
				<div>A complete workflow that you can demo</div>
			</div>
			<div>
				<FeatherIcon name="smile" />
				<div class="font-semibold mt-2">1 Change Request</div>
				<div>Request changes once you get your designs for review</div>
			</div>
		</div>
	</div>
</div>

<div class="my-12">
	<div class="section-header">
		<div>
			<h2>Clickable UI/UX prototypes examples</h2>
			<h3 class="mt-2">Here's what we've designed for startup founders like you</h3>
		</div>
	</div>
	<div class="section-body">
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 mb-4">
			{#each $portfolio as portfolioItem}
				<a target="_blank" href={portfolioItem.src} class="block rounded-lg">
					<img src={portfolioItem.img} class="mb-2 object-cover aspect-video rounded-xl" />

					<div>
						<h3>{portfolioItem.name}</h3>
						<div class="opacity-70">{portfolioItem.description}</div>
					</div>
				</a>
			{/each}
		</div>

		<h3 class="mb-2">Here is how we'll present your prototype:</h3>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-2">
			<RenderUrl
				url="https://www.loom.com/share/4f4896d2c82942acbe4a3f55e7b29c22?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
			/>
			<RenderUrl
				url="https://www.loom.com/share/49e83ae30050411492f992db3677c311?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
			/>
		</div>
	</div>
</div>
