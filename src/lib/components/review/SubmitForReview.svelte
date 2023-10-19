<script>
	import _ from 'lodash';
	import { get, post, postFile } from '$lib/api';
	import Button from '$lib/components/Button.svelte';
	import RenderUrl from '$lib/components/RenderUrl.svelte';
	import toDollars from '$lib/helpers/toDollars';

	export let request;
	export let onSubmitted = (cr) => {};

	let isSubmittingForReview = false;

	let revision = {
		message: '',
		files: []
	};

	let startSubmittingForReview = () => {
		isSubmittingForReview = true;
	};

	// requestChanges();

	let submitForReview = async () => {
		let { messages } = await post(`requests/${request._id}/reviews`, {
			message: revision.message,
			files: revision.files,
			figmaPrototypeUrl: revision.figmaPrototypeUrl,
			figmaFileUrl: revision.figmaFileUrl,
			loomUrl: revision.loomUrl
		});

		onSubmitted({ messages });
	};
</script>

{#if isSubmittingForReview}
	<div class="p-4 px-8 mt-8 my-8 bg-zinc-900 rounded-xl">
		<h3 class="font-bold">Submit For Review</h3>

		{#if !request.figmaFileUrl}
			<label class="mt-8">Figma Prototype File:</label>
			<input
				class="w-full"
				placeholder="https://www.figma.com/proto/ZMm7jGbK9iVKmg22CpBq8w/TechMatch?type=design&node-id=0-1&t=ugGXPDrTcRyETuVK-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3"
				bind:value={revision.figmaPrototypeUrl}
			/>

			<label class="mt-8">Figma Source File:</label>
			<input
				class="w-full"
				placeholder="https://www.figma.com/file/ZMm7jGbK9iVKmg22CpBq8w/TechMatch?type=design&node-id=0%3A1&mode=design&t=SrNxSzB7OYB6lDjk-1"
				bind:value={revision.figmaFileUrl}
			/>

			<div class="mt-2">Ensure that the files are public</div>
		{/if}

		<hr class="my-8 opacity-30" />

		<label class="mt-8">Loom Demo:</label>
		<input
			class="w-full"
			placeholder="https://www.loom.com/share/4033e7bb54ae48e9bbf68d5cf8a2c1b0?sid=ba84eb7b-49c6-491b-9f25-53e6b0dcd2f7"
			bind:value={revision.loomUrl}
		/>
		<div class="mt-2">Ensure that you demonstrate the requested workflow in your demo</div>

		<label class="mt-8">Your message to {request.user.fullName.split(' ')[0]}</label>
		<div class="h-full">
			<textarea
				class="w-full min-h-[250px]"
				placeholder="Hi {request.user.fullName.split(
					' '
				)[0]}! Please review the updates and let me know what you think. Did we get your idea right?"
				bind:value={revision.message}
			/>

			<label for="new-file" class="my-4 cursor-pointer">
				🗂 Attach File

				<input
					id="new-file"
					type="file"
					on:change={async (e) => {
						let file = await postFile('files', (e.target?.files || e.detail?.files)[0]);

						revision.files = [...revision.files, file];
					}}
					hidden
				/>
			</label>

			<div class="flex flex-wrap">
				{#each revision.files as file}
					<RenderUrl imgClass="mr-4 mb-4 max-h-[200px] object-cover" url={file.url} />
				{/each}
			</div>
		</div>
		<hr class="my-8 opacity-30" />
		<div>
			<Button class="green mt-2 mr-4" onClick={submitForReview}>Submit For Review</Button>
			<div class="mt-2">Once sent, we'll notify client over email</div>
		</div>
	</div>
{:else}
	<div class="rounded-xl my-8">
		<div class="bg-green-900 p-4">
			<button class="green" on:click={startSubmittingForReview}>Submit Designs For Review</button>
		</div>
	</div>
{/if}
