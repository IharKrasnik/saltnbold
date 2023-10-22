<script>
	import { fade } from 'svelte/transition';
	import FigmaIcon from '$lib/icons/figma.svelte';
	import { toolsObj } from '$lib/stores/tools';

	let freebies = [
		$toolsObj['webflow-starters'],
		$toolsObj['scribbles'],
		$toolsObj['marketing-pack'],
		$toolsObj['simple-icon-svg-set'],
		$toolsObj['nice-web-icon-set'],
		$toolsObj['pitch-deck-templates']
	];

	let figplateWeb = $toolsObj['figplate-web'];
	let figplateMobile = $toolsObj['figplate-mobile'];

	let productName = '';
	let productTitle = '';
</script>

<div class="">
	<h1 class="mb-2">Design Tools and Templates</h1>
	<h2 class="mb-4">Save days on your product design with Salt & Bold free design tools</h2>
</div>

<hr class="my-8 opacity-30" />

<div class="flex justify-between">
	<h2 class="font-bold">Figma Starters</h2>
</div>

<h3 class="mb-8 mt-2">
	Use our simple design systems to design quick mockups yourself. No need to know how to use Figma
	or design interfaces.
</h3>

<div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 w-full">
	<div>
		<a href="tools/{figplateWeb.key}" target="_blank">
			<div
				class="rounded-xl relative border bg-zinc-900 border-[#242424] flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
			>
				<img class="w-full rounded-t-xl cover-image" src={figplateWeb.img} />

				<div class="p-4">
					<div class="font-bold mb-2 flex justify-between">
						<h3>{figplateWeb.name}</h3>
						<div class="max-w-[50px] max-h-[50px] mr-8">
							<FigmaIcon />
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
	<div>
		<a href="tools/{figplateMobile.key}" target="_blank">
			<div
				class="rounded-xl relative border bg-zinc-900 border-[#242424] flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
			>
				<img class="w-full rounded-t-xl cover-image" src={figplateMobile.img} />

				<div class="p-4">
					<div class="flex justify-between font-bold mb-2">
						<h3>{figplateMobile.name}</h3>
						<div class="max-w-[50px] max-h-[50px] mr-8">
							<FigmaIcon />
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

<div class="flex justify-between mt-8">
	<h2 class="font-bold">Marketing Gems</h2>
</div>

<h3 class="mb-8 mt-2">Use Salt & Bold marketing assets to make your brand pop</h3>

<div class="columns-1 md:columns-2 lg:columns-3 w-full gap-4 w-full">
	{#each freebies as freebie}
		<div class="break-inside-avoid mb-8">
			<a href="tools/{freebie.key}" target="_blank">
				<div
					class="rounded-xl relative border bg-zinc-900 border-[#242424] flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
				>
					<img class="w-full rounded-t-xl cover-image" src={freebie.img} />

					<div class="p-4">
						<div class="w-full mb-2 flex justify-between">
							<div>
								<h3 class="font-bold">{freebie.name}</h3>
								<div>{freebie.description}</div>
							</div>
							<div class="max-w-[50px] h-[25px]">
								<!-- <FigmaIcon /> -->
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<div class="min-h-screen pt-4">
	<h2 class="mb-8 mt-8">Ready For No-Code?</h2>

	<div class="p-4 sm:p-8 bg-zinc-900 mb-4 rounded-xl mb-8 h-full">
		<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
			<div>
				<h2 class="font-bold">Momentum Page</h2>
				<h3 class="mt-2">Launch your landing page with email capture and analytics in seconds</h3>

				<div class="mt-8">
					<label>What's your product name?</label>
					<input placeholder="MyCoolProduct" class="w-full" bind:value={productName} />

					{#if productName}
						<div class="mt-4" in:fade>
							<label>What's your 1-sentence pitch?</label>

							<input
								placeholder="Achieve some goal by doing something"
								class="w-full"
								bind:value={productTitle}
							/>
						</div>
					{/if}

					<a
						href="https://page.mmntm.build?name={productName}&title={productTitle}"
						target="_blank"
					>
						<button class="mt-8">Launch My Page</button>
					</a>
				</div>
			</div>
			<div>
				<img
					src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697913914623-image.png"
				/>
			</div>
		</div>
	</div>
</div>
