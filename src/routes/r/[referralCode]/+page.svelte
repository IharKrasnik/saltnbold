<script>
	import { page } from '$app/stores';
	import GetNewDesign from '$lib/components/GetNewDesign.svelte';
	import currentUser from '$lib/stores/currentUser';

	let storeReferralCode = () => {
		if (!$currentUser && localStorage['referral']) {
			let referral = JSON.parse(localStorage['referral']);

			if (referral.code === $page.params.referralCode) {
				return;
			}
		}

		localStorage['referral'] = JSON.stringify({
			code: $page.params.referralCode,
			setOn: new Date()
		});
	};
	storeReferralCode();
</script>

<GetNewDesign />
