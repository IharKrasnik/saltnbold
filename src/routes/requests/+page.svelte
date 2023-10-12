<script>
	let requests = [
		{
			name: 'Get Grants',
			type: 'prototype',
			status: 'requested',
			description: `I'm building the smartphone based website builder. Although website builders such as Shopify, and Wix help small shop owners to build their own website, non-PC users from developing countries cannot use their website tools.
So we try to solve those issues by providing smartphone based website tool.
1.Users can drop and drag components to design the website from the mobile phone.
2.Integrate with payments, events, and inventory management.
3.Pick up mobile based template to save their design time.`,
			assignedTo: [{}]
		}
	];
</script>

<h2 class="mb-8">My Requests</h2>

<div class="grid grid-cols-2 w-full gap-4 w-full">
	{#each requests as request}
		<a href={request.href}>
			<div
				class="rounded-xl border border-slate-600 flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
			>
				<img
					class="w-full rounded-t-xl cover-image"
					src={request.img ||
						'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696533773368-image.png'}
				/>

				<div class="p-4">
					<div class="font-bold mb-2">{request.name}</div>
					<div class="mb-2">{request.type}</div>

					<p class="opacity-80 line-clamp-3">{request.description}</p>
				</div>
			</div>
		</a>
		<div>
			<div>Timeline</div>

			<table>
				<tr>
					<td>Prototype</td>
					<td>Demo</td>
				</tr>
			</table>
		</div>
	{/each}
</div>
