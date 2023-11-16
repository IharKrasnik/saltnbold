<script>
	import { marketingServices } from '$lib/stores/services';
	import ServicePage from '$lib/components/ServicePage.svelte';

	let service = marketingServices.find((s) => s.key === 'logo');
</script>

<ServicePage {service} />
