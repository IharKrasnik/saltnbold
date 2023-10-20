<script>
	import FigmaIcon from '$lib/icons/figma.svelte';
	let freebies = [
		{
			name: 'Scribble Pack',
			img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697813025026-image.png',
			url: 'https://www.figma.com/community/file/1291356570368301625/scribble-pack',
			description: 'Turn your presentations into engaging stories with hand-drawn scribbles'
		},
		{
			name: 'Marketing Pack',
			img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697813093453-image.png',
			url: 'https://www.figma.com/community/file/1291750160148525477/social-media-templates',
			description: 'Use marketing pack for your social media posts (3 different sizes)'
		},
		{
			name: 'Icon Set',
			img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697813078586-image.png',
			url: 'https://www.figma.com/community/file/1291761276684095954/20-hand-drawn-icon-set',
			description:
				'Make your landing pages and visual content stand out with custom drawn emoji-like icons'
		}
	];
</script>

<div class="flex justify-between">
	<h1 class="mb-8">Design Tools and Templates</h1>
</div>

<div class="flex justify-between">
	<h2 class="font-bold">Figma Starters</h2>
</div>

<h3 class="mb-8 mt-2">
	Use our simple design systems to design quick mockups yourself. No need to prior knowledge of
	designing or Figma.
</h3>

<div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 w-full">
	<div>
		<a
			href="https://www.figma.com/file/SqyFdk2OlQuQsriGfoQtEd/Figplate?type=design&node-id=0%3A1&mode=design&t=UV2j6xdJWUCtyB1x-1"
			target="_blank"
		>
			<div
				class="rounded-xl relative border border-slate-600 flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
			>
				<img
					class="w-full rounded-t-xl cover-image"
					src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697811380471-image.png"
				/>

				<div class="p-4">
					<div class="font-bold mb-2 flex justify-between">
						<h3>Web App Starter</h3>
						<div class="max-w-[50px] max-h-[50px] mr-8">
							<FigmaIcon />
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
	<div>
		<a
			href="https://www.figma.com/file/dWdp1f7Vo9WbpI9SMoOq4E/Figplate-Mobile?type=design&node-id=54-4413&mode=design&t=TpYPGgYX4FzXzwpd-0"
			target="_blank"
		>
			<div
				class="rounded-xl relative border border-slate-600 flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
			>
				<img
					class="w-full rounded-t-xl cover-image"
					src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697811632396-image.png"
				/>

				<div class="p-4">
					<div class="flex justify-between font-bold mb-2">
						<h3>Mobile App Starter</h3>
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

<h3 class="mb-8 mt-2">
	Use our simple design systems to design quick mockups yourself. No need to prior knowledge of
	designing or Figma.
</h3>

<div class="grid grid-cols-1 lg:grid-cols-3 w-full gap-4 w-full">
	{#each freebies as freebie}
		<div>
			<a href={freebie.url} target="_blank">
				<div
					class="rounded-xl relative border border-slate-600 flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
				>
					<img class="w-full rounded-t-xl cover-image" src={freebie.img} />

					<div class="p-4">
						<div class="w-full mb-2 flex justify-between">
							<div>
								<h3 class="font-bold">{freebie.name}</h3>
								<div>{freebie.description}</div>
							</div>
							<div class="max-w-[50px] h-[25px]">
								<FigmaIcon />
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
