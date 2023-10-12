import authServerGuard from '$lib/guards/auth.server';

export async function load({ url, params, session, cookies }) {
	let authData = await authServerGuard({ url, params, session, cookies }, 'Salt and Bold Studio');

	return {
		...authData,
		ogTitle: 'Salt and Bold Studio',
		ogDescription: 'Fast product design for startups',
		ogImage:
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1693764860336-image.png'
	};
}
