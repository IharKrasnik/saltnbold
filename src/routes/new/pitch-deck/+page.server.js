/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		title: 'Design Pitch Deck',
		ogTitle: 'Design Landing Page'
	};
}
