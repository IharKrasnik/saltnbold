<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { get } from '$lib/api';

	import currentUser, { isLoading as isCurrentUserLoading } from '$lib/stores/currentUser';
	import requests, { isLoading as isRequestsLoading } from '$lib/stores/requests';

	if (browser) {
		if ($currentUser) {
			if ($requests.length) {
				goto('/my-designs');
			} else {
				goto('/new');
			}
		} else {
			goto('/new');
		}
	}
</script>
