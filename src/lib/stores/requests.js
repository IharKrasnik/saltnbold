import { get, post } from '$lib/api';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { getService } from '$lib/stores/services';

const requestsStore = writable([]);

export let isLoading = writable(true);

export default requestsStore;

export let createRequest = async (newRequest) => {
	let service = getService(newRequest.type);

	let createdRequest = await post('requests', {
		type: newRequest.type,
		amount: service?.amount,
		activateAmount: service?.activateAmount,
		data: newRequest
	});

	requestsStore.update((rs) => [createdRequest, ...rs]);

	goto(`/my-designs/${createdRequest._id}`);
};
