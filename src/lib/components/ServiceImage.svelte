<script>
	import services from '$lib/stores/services';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let icons = {};

	onMount((browser) => {
		$services.forEach(async (s) => {
			icons[s.key] = (await import(`$lib/icons/services/${s.key}.svelte`)).default;

			debugger;
		});
	});

	let clazz = '';
	export { clazz as class };

	export let color = 'white';
	export let serviceKey;
</script>

<div class="service-image {color ? `icon-${color}` : ''} {clazz}">
	<svelte:component this={icons[serviceKey]} style="width: 100%" />
</div>
