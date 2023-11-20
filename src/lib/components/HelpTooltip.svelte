<script>
	import { fly } from 'svelte/transition';
	import FeatherIcon from '$lib/components/FeatherIcon.svelte';
	import clickOutside from '$lib/use/clickOutside';

	let isOpen = false;
</script>

<div class="relative" use:clickOutside on:clickOutside={() => (isOpen = false)}>
	<div
		class="cursor-pointer"
		on:click={() => {
			isOpen = true;
		}}
	>
		<FeatherIcon size="15" class="ml-2 mb-2" name="help-circle" />
	</div>

	{#if isOpen}
		<div
			in:fly={{ y: 25, duration: 150 }}
			class="p-4 absolute left-8 bottom-0 bg-[#111] text-white rounded-lg min-w-[300px]"
		>
			<slot />
		</div>
	{/if}
</div>
