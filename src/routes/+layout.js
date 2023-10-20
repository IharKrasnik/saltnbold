import authClientGuard from '$lib/guards/auth.client';

import { get } from '$lib/api';

export async function load({ url, params, session, cookies }) {
	let authData = await authClientGuard({ url, params, session }, 'Build In Public Journal');

	return {
		...authData,
		ogTitle: 'Salt and Bold Studio',
		ogDescription: 'Result-oriented product design studio for startups',
		ogImage: 'https://studio.saltnbold.com/salt_logo.png'
	};
}
