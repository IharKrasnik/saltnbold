<script>
	import NotificationIcon from '$lib/icons/notification.svelte';
	import PercentageIcon from '$lib/icons/percentage.svelte';
	import UploadIcon from '$lib/icons/upload.svelte';
	import WalletIcon from '$lib/icons/wallet.svelte';
	import LightningIcon from '$lib/icons/lightning.svelte';
	import CheckmarkIcon from '$lib/icons/checkmark.svelte';

	let map = {
		notification: NotificationIcon,
		percentage: PercentageIcon,
		upload: UploadIcon,
		wallet: WalletIcon,
		lightning: LightningIcon,
		checkmark: CheckmarkIcon
	};

	let clazz = '';
	export { clazz as class };

	export let color = 'white';
	export let size = 35;

	export let name = 'wallet';
</script>

<div class="icon {color ? `icon-${color}` : ''} w-[{size}px] h-[{size}px] {clazz}">
	<svelte:component this={map[name]} />
</div>
