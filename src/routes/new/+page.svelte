<script>
	import currentUser, { isLoading as isCurrentUserloading } from '$lib/stores/currentUser';
	import services from '$lib/stores/services';
</script>

<h1 class="text-2xl font-bold mb-2">
	{#if $currentUser}
		Hi {$currentUser.fullName.split(' ')[0] || ''}! Need new designs?
	{:else}
		Hi! Need new designs?
	{/if}
</h1>

<h2 class="mb-8">Choose the service you need and get it done super fast</h2>

<div class="grid grid-cols-3 w-full gap-4 w-full">
	{#each $services as service}
		<a href={service.href}>
			<div
				class="rounded-xl border border-slate-600 flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer"
			>
				{#if service.img}
					<img class="w-full rounded-t-xl cover-image" src={service.img} />
				{:else if service.video}
					<video class="cover-image" looped autoplay muted src={service.video} />
				{/if}

				<div class="p-4">
					<div class="font-bold mb-2">
						<h3>
							{service.name}
						</h3>
					</div>

					<div class="opacity-80">{service.description}</div>
				</div>
			</div>
		</a>
	{/each}

	<div
		class="rounded-xl border border-slate-600 flex flex-col mb-4 bg-[#2b65f9] flex flex-col justify-center items-center transition hover:scale-105 hover:bg-green-300 hover:text-black cursor-pointer"
	>
		<div class="text-2xl">Get custom design</div>
	</div>
</div>

<style>
	.cover-image {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}
</style>
