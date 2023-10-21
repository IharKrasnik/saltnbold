<script>
	import Loader from '$lib/components/Loader.svelte';
	import { toolsObj } from '$lib/stores/tools';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let tool = $toolsObj[$page.params.toolId];

	setTimeout(() => {
		goto(tool.url);
	}, 2000);
</script>

<div>
	<h1 class="mb-2">Tools > {tool.name}</h1>
	{#if tool.description}
		<h2 class="mb-2">{tool.description}</h2>
	{/if}

	<a href={tool.url}>
		<img class="max-w-[300px] rounded-xl mt-4" src={tool.img} />
	</a>
</div>

<div class="mt-4">
	Redirecting...

	<Loader />
</div>
