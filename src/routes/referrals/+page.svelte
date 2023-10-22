<script>
	import currentUser from '$lib/stores/currentUser';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import TwitterIcon from '$lib/icons/twitter.svelte';
	import LinkedinIcon from '$lib/icons/linkedin.svelte';
	import FacebookIcon from '$lib/icons/facebook.svelte';
	import { showSuccessMessage } from '$lib/services/toast';
	import showCrispChat from '$lib/helpers/showCrispChat';

	if ($currentUser) {
		$currentUser.referralCode = 'igor';
	}

	let referralLink =
		window &&
		$currentUser &&
		`${
			window.location.hostname.includes('localhost')
				? 'https://studio.saltnbold.com'
				: window.location.hostname
		}/r/${$currentUser.referralCode}`;

	let isJustCopied = false;

	let shareText = `Check out @saltnbold, it's super simple to do quality design with them!
${referralLink}`;

	let getTwitterUrl = () => {
		return `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
	};

	let getFacebookUrl = () => {
		return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			referralLink
		)}&quote=${encodeURIComponent(shareText)}`;
	};

	let getLinkedInUrl = () => {
		return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
			referralLink
		)}`;
	};

	let copyUrl = () => {
		window.navigator.clipboard.writeText(referralLink);

		showSuccessMessage('URL was copied to clipboard!');
	};
</script>

<div class="section-header">
	<div>
		<h1>My Referrals</h1>
		<h2>Earn 20% of the payments from people you've referred to Salt & Bold</h2>
	</div>
</div>

<div class="section-body">
	{#if $currentUser}
		<label>Your special referral link</label>

		<div class="" on:click={copyUrl}>
			<input class="w-full" value={referralLink} disabled />
		</div>

		<div class="flex flex-wrap items-center justify-start mt-8">
			<button class="mr-4 mb-4 secondary" on:click={copyUrl}
				><div class="w-[1px] h-[30px]" />
				Copy URL To Clipboard</button
			>

			<a target="_blank" class="mr-4 mb-4" href={getTwitterUrl()}>
				<button class="secondary"
					><TwitterIcon class="w-[30px] h-[30px] mr-2" />
					<div class="flex-shrink-0">Share In X</div></button
				>
			</a>

			<a target="_blank" class="mr-4 mb-4" href={getLinkedInUrl()}>
				<button class="secondary"
					><LinkedinIcon class="w-[30px] h-[30px] mr-2" />
					<div class="flex-shrink-0">Share In LinkedIn</div></button
				>
			</a>

			<a target="_blank" class="mr-4 mb-4" href={getFacebookUrl()}>
				<button class="secondary"
					><FacebookIcon class="w-[30px] h-[30px] mr-2" />
					<div class="flex-shrink-0">Share In Facebook</div></button
				>
			</a>
		</div>
	{:else}
		<LoginButton />
	{/if}
</div>

<div class="section-header mt-8">
	<h3>How it works?</h3>

	<div>
		<div class="opacity-70 hover:opacity-100 transition cursor-pointer" on:click={showCrispChat}>
			Learn More
		</div>
	</div>
</div>

<div class="section-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
	<div>
		<div class="font-bold">1. Share the Link</div>

		Send a link to your friends, publish in social networks etc.
	</div>
	<div>
		<div class="font-bold">2. See Referrals</div>

		Once people sign up with your link, you'll see them in your referral list
	</div>
	<div>
		<div class="font-bold">3. Earn 20% Commision</div>
		Once they buy from Salt & Bold we'll pay you 20% of their payment
	</div>

	<div>
		<div class="font-bold">4. Get Paid</div>
		Withdraw your funds to PayPal account
	</div>
</div>
