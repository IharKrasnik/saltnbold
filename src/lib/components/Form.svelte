<script>
	import { z } from 'zod';

	export let form = { title: ' ', description: '', fields: [], buttonText: 'Continue' };
	export let onSubmitted = () => {};

	export let valueObj;

	let isSubmittedOnce = false;

	let getSchema = () => {
		let schema = {};

		form.fields.forEach((f) => {
			schema[f.name] = z.string();

			if (f.type === 'url') {
				schema[f.name] = schema[f.name].url();
			}

			if (f.isRequired) {
				schema[f.name] = schema[f.name].nonempty();
			} else {
				schema[f.name] = schema[f.name].optional().or(z.literal(''));
			}
		});

		return z.object(schema);
	};

	let errors = {};

	let validate = () => {
		errors = {};

		if (!isSubmittedOnce) {
			return;
		}
		try {
			getSchema().parse(valueObj);

			return true;
		} catch (error) {
			error.issues.forEach((issue) => {
				errors[issue.path[0]] = issue.message;
			});

			// If the data is invalid, display an error message
			console.log(errors);
		}

		return false;
	};

	let isLoading = false;

	let submit = async () => {
		isSubmittedOnce = true;
		errors = {};
		isLoading = true;

		if (validate()) {
			await onSubmitted(valueObj);
		}

		isLoading = false;
	};
</script>

{#if form.title}
	<h2 class="text-xl font-bold">{form.title}</h2>
{/if}
{#if form.description}
	<h3 class="text-lg mt-2">
		{form.description}
	</h3>
{/if}

<div class="mt-8 w-full max-w-[600px]">
	{#each form.fields as field}
		<div class="mb-8">
			<label>{field.title}</label>

			{#if field.type === 'url'}
				<input
					name={field.name}
					type="url"
					on:blur={validate}
					class:error={errors[field.name]}
					required={field.isRequired}
					placeholder={field.placeholder || 'https://mysite.com'}
					bind:value={valueObj[field.name]}
					class="w-full"
				/>
			{:else if field.type === 'long-text'}
				<textarea
					name={field.name}
					on:blur={validate}
					class:error={errors[field.name]}
					placeholder={field.placeholder || ''}
					rows="4"
					class="w-full"
					bind:value={valueObj[field.name]}
				/>
			{:else if field.type === 'short-text'}
				<input
					name={field.name}
					type="text"
					on:blur={validate}
					class:error={errors[field.name]}
					required={field.isRequired}
					placeholder={field.placeholder || ''}
					bind:value={valueObj[field.name]}
					class="w-full"
				/>
			{/if}

			{#if field.hint}
				<div class="form-hint">💡 {field.hint}</div>
			{/if}
		</div>
	{/each}

	<button type="submit" class="secondary" on:click={submit} disabled={isLoading}>
		{#if isLoading}
			<svg
				aria-hidden="true"
				role="status"
				class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="#1C64F2"
				/>
			</svg>
		{/if}

		{form.buttonText || 'Continue'}</button
	>
</div>
