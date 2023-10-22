import authServerGuard from '$lib/guards/auth.server';

export async function load({ url, params, session, cookies }) {
	let authData = await authServerGuard({ url, params, session, cookies }, 'Salt and Bold Studio');

	return {
		...authData,
		ogTitle: 'Salt and Bold — Studio',
		ogDescription: 'Fast product design for startups',
		ogImage:
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/63eb7b390b1414001513caf7/1697985592176-salt_og.png'
	};
}
