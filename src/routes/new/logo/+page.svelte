<script>
	import services from '$lib/stores/services';
	import ServicePage from '$lib/components/ServicePage.svelte';

	let service = $services.find((s) => s.key === 'logo');
</script>

<ServicePage {service} />
