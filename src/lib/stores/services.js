import { writable } from 'svelte/store';

let services = [
	{
		key: 'landing_page',
		name: 'Landing Page',
		description: 'Validate your product idea and grow waitlist',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527198530-image.png'
	},
	{
		key: 'ui_ux_prototype',
		name: 'UI/UX Prototype',
		description: 'Pitch your product to users and investors',
		img: 'https://assets.website-files.com/64831da00244efd7c8280a6c/6501fa4c88cef88ac28330a7_image%202.png',
		href: '/new/ui-ux-prototype'
	},
	{
		name: 'Product Demo Video',
		description: 'Explain your product with dynamic video',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528187173-image.png'
	},
	{
		name: 'Motion Animation',
		description: 'Win people attention with stunning animations',
		video:
			'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1696528525428-motion.mp4'
	},
	{
		name: 'Pitch Deck',
		description: 'Convert your story into compelling pitch',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527520883-image.png'
	},
	{
		name: 'Logo & Brand',
		description: 'Differentiate and stand out from the crowd',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528413760-image.png'
	},
	{
		name: 'Marketing Assets',
		description: 'Unify your marketing content and make it pop',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528869771-image.png'
	}
];

export default writable(services);
