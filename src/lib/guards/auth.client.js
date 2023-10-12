import cookie from 'cookie';
import { browser } from '$app/environment';
import currentUser, { isLoading as isUserLoading } from '$lib/stores/currentUser';
import apiServerSide from '$lib/apiServerSide';
import { redirect } from '@sveltejs/kit';
import { GOOGLE_LOGIN_URL } from '$lib/env';

let user;

currentUser.subscribe((value) => (user = value));

export default async ({ url }, title = 'Momentum') => {
	if (browser && !user) {
		const cookies = cookie.parse(document.cookie);
		let accessToken = cookies.access_token;
		console.log('accessToken', accessToken);
		if (!user && accessToken && !url.href.includes('/embed')) {
			let api = apiServerSide({ accessToken });
			isUserLoading.set(true);

			try {
				user = await api.get('users/current');
				console.log('user', user);
				user.username = user.username || 'igor.krasnik';
				currentUser.set(user);
			} catch (err) {
				console.log('err', err);
			}
		} else if (url.href.includes('/write')) {
			throw redirect(302, GOOGLE_LOGIN_URL);
		} else {
			isUserLoading.set(false);
			currentUser.set(null);
		}

		isUserLoading.set(false);
	}
	console.log('helo');
	return {
		ogTitle: title
	};
};
