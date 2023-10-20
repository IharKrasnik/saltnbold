import { writable } from 'svelte/store';

let services = [
	{
		key: 'landing_page',
		amount: 19999,
		activateAmount: 999,
		name: 'Landing Page',
		description: 'Validate your product idea and grow waitlist',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527198530-image.png',
		href: '/new/landing-page'
	},
	{
		key: 'ui_ux_prototype',
		amount: 9999,
		activateAmount: 999,
		name: 'UI/UX Prototype in 48 Hours',
		time: {
			label: '48 hours'
		},
		description: 'Pitch your product to users and investors',
		img: 'https://assets.website-files.com/64831da00244efd7c8280a6c/6501fa4c88cef88ac28330a7_image%202.png',
		href: '/new/ui-ux-prototype'
	},
	{
		amount: 39999,
		key: 'product_demo_video',
		name: 'Product Demo Video',
		description: 'Explain your product with dynamic video',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528187173-image.png',
		href: '/new/product-demo-video'
	},
	{
		amount: 19999,
		key: 'pitch_deck',
		name: 'Pitch Deck',
		description: 'Convert your story into compelling pitch',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527520883-image.png',
		href: '/new/pitch-deck'
	},

	{
		key: 'marketing_assets',
		name: 'Marketing Assets',
		description: 'Design nice unified marketing images',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528869771-image.png',
		href: '/new/marketing-assets'
	},
	{
		amount: 9999,
		activateAmount: 999,
		key: '3d_icon',
		name: '3D Icon',
		description: 'Spice up your designs with authentic 3D art',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697798080012-image.png',
		href: '/new/3d-icon'
	},
	{
		key: 'motion_animation',
		name: 'Motion Animation',
		description: 'Win people attention with stunning animations',
		video:
			'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1696528525428-motion.mp4',
		href: '/new/motion-animation'
	},
	{
		key: 'mvp_build',
		name: 'MVP in 1 Month',
		description: 'Build your product super fast with no-code + code',
		time: {
			label: '1 month'
		},
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697800210476-image.png',
		href: '/new/mvp-build'
	}
];

export default writable(services);

export let formatRequestType = (requestType) => {
	return services.find((s) => s.key === requestType)?.name;
};

export let getService = (requestType) => {
	return services.find((s) => s.key === requestType);
};
