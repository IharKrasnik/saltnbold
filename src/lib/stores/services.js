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

export let portfolio = writable([
	{
		type: 'ui_ux_prototype',
		name: 'Shelf',
		description: 'Modern QR-code generator for tracking inventory',
		src: 'https://www.figma.com/proto/8Mb6BCx3yTShfW6ZvDkhGe/Shelf-prototype?page-id=0%3A1&type=design&node-id=202-11871&viewport=846%2C-972%2C0.1&t=ZXtZTOi4ZCn6whbq-1&scaling=scale-down&starting-point-node-id=202%3A11871',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697916380201-image.png'
	},
	{
		type: 'ui_ux_prototype',
		name: 'Moodahub',
		description: 'A virtual wardrobe with social mechanics',
		img: 'https://assets-global.website-files.com/64831da00244efd7c8280a6c/6501fa4c88cef88ac28330a7_image%202.png',
		src: 'https://www.figma.com/proto/ZN2PbVdAdFcWBSKOeXLzFz/Moodahub?page-id=0%3A1&type=design&node-id=0-12609&viewport=895%2C1154%2C0.12&t=WlR9YRLJSax4O2jU-1&scaling=scale-down&starting-point-node-id=0%3A12724&mode=design'
	},
	{
		type: 'ui_ux_prototype',
		name: 'TechMate',
		description: 'Find perfect co-founder with AI',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697916195962-image.png',
		src: 'https://www.figma.com/proto/ZMm7jGbK9iVKmg22CpBq8w'
	},
	{
		type: 'ui_ux_prototype',
		name: 'Collab Universe',
		description: 'Connect with creators via booking agencies, major labels, production companies',
		img: 'https://assets-global.website-files.com/64831da00244efd7c8280a6c/6501fa4d1d0b77399cac8a9c_image%202-3.png',
		src: 'https://www.figma.com/proto/bh94Fc3bczOEBGCwkAmIHf/Collab-Universe?page-id=0%3A1&type=design&node-id=9-14&viewport=-435%2C724%2C0.39&t=dfxBToX6UmYSa4DA-1&scaling=scale-down&starting-point-node-id=9%3A14&show-proto-sidebar=1'
	}
]);

export default writable(services);

export let formatRequestType = (requestType) => {
	return services.find((s) => s.key === requestType)?.name;
};

export let getService = (requestType) => {
	return services.find((s) => s.key === requestType);
};
