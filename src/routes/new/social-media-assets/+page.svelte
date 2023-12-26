<script>
	import services, { marketingServices } from '$lib/stores/services';
	import ServicePage from '$lib/components/ServicePage.svelte';

	let service = $services.find((s) => s.key === 'social_media_assets');
</script>

<ServicePage {service} />
