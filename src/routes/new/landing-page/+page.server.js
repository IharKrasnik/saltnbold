/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		title: 'Get Landing Page',
		ogTitle: 'Get Landing Page'
	};
}
