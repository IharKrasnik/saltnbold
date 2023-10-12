import { get } from '$lib/api';
import { writable } from 'svelte/store';

const requestsStore = writable(undefined);

export let isLoading = writable(true);

export default requestsStore;
