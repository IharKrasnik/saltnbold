import { writable } from 'svelte/store';

let services = [
	{
		key: 'social_media_assets',
		name: 'Social Media Asset',
		amount: 5999,
		href: '/new/social-media-assets',
		activateAmount: 999,
		time: {
			label: '2 days'
		},
		description: 'Illustration for your social media post or other content',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703607260430-image.png',

		form: {
			cacheId: 'social_media_asset',
			buttonText: 'Start Designing',
			defaultValue: {
				description: '',
				references: ''
			},
			fields: [
				{
					name: 'description',
					title: `What designs do you need?`,
					description: '',
					placeholder: `I need an image to announce the release of a new feature that we were building for the last month`,
					type: 'long-text',
					hints: [`Please share the links to existing assets, if any`],
					isRequired: true
				},
				{
					name: 'references',
					title: `Please send few examples (urls) of designs that you like`,
					description: '',
					placeholder: `I love how clean and simple Linear brand is (https://linear.app)`,
					type: 'long-text',
					// hint: `The more details you share, the better prototype you'll get`,
					isRequired: true
				}
			]
		},

		portfolio: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703609528544-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703678100530-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703609587501-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703609642932-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703609608863-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703609665955-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703610002111-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703610033470-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703610056964-image.png'
		]
	},
	{
		key: 'logo',
		name: 'Logo',
		amount: 37999,
		href: '/new/logo',
		activateAmount: 999,
		time: {
			label: '2 days'
		},
		description: '3 unique concepts to choose from',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703607260430-image.png',

		form: {
			cacheId: 'logo',
			buttonText: 'Start Designing',
			defaultValue: {
				description: '',
				references: ''
			},
			fields: [
				{
					name: 'description',
					title: `What design do you need?`,
					description: '',
					placeholder: `I want to design a logo for my product Momentum. It will help founders to monitor their growth daily.`,
					type: 'long-text',
					hints: [`Please share the links to existing assets, if any`],
					isRequired: true
				},
				{
					name: 'references',
					title: `Please send few examples (urls) of designs that you like`,
					description: '',
					placeholder: `I love how clean and simple Linear brand is (https://linear.app)`,
					type: 'long-text',
					// hint: `The more details you share, the better prototype you'll get`,
					isRequired: true
				}
			]
		},
		explainers: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700136655062-image.png'
		],
		portfolio: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127450464-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127512982-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127540453-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127554415-image.png'
		]
	},

	{
		amount: 39999,
		key: 'landing_page',
		activateAmount: 999,
		name: 'Landing Page',
		time: {
			label: '3 days'
		},
		description: 'Validate your product idea or launch a page for your product',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1698393601171-Landing%20page.png',

		img2: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527198530-image.png',
		href: '/new/landing-page'
	},
	{
		key: 'ui_ux_prototype',
		amount: 67999,
		activateAmount: 999,
		name: 'UI/UX Prototype in 48 Hours',
		time: {
			label: '3 days'
		},
		description: 'Pitch your product to users and investors',
		img: 'https://assets.website-files.com/64831da00244efd7c8280a6c/6501fa4c88cef88ac28330a7_image%202.png',
		href: '/new/ui-ux-prototype'
	},
	{
		amount: 117900,
		activateAmount: 999,
		key: 'product_demo_video',
		name: 'Product Demo Video',
		time: {
			label: '5 days'
		},
		description: 'Explain your product with dynamic video',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528187173-image.png',
		href: '/new/product-demo-video'
	}

	// {
	// 	amount: 5999,
	// 	activateAmount: 999,
	// 	key: '3d_icon',
	// 	name: '3D Icon',
	// 	time: {
	// 		label: '48 hours'
	// 	},
	// 	description: 'Spice up your designs with authentic 3D art',
	// 	img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1698393543012-3d.png',
	// 	img2: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697798080012-image.png',
	// 	href: '/new/3d-icon'
	// },
	// {
	// 	amount: 19999,
	// 	activateAmount: 999,
	// 	key: 'motion_animation',
	// 	name: 'Video Ads',
	// 	time: {
	// 		label: '3 days'
	// 	},
	// 	description: `Use short animations to promote your product features`,
	// 	img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1698393679354-motion.png',

	// 	video:
	// 		'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1696528525428-motion.mp4',
	// 	href: '/new/motion-animation'
	// },

	// {
	// 	amount: 9999,
	// 	activateAmount: 999,
	// 	key: 'pitch_deck',
	// 	name: 'Pitch Deck',
	// 	description: 'Convert your story into compelling pitch',
	// 	img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527520883-image.png',
	// 	href: '/new/pitch-deck'
	// },
	// {
	// 	amount: 750000,
	// 	key: 'mvp_build',
	// 	name: 'MVP in 1 Month',
	// 	description: 'Build your product super fast. Full-stack code + no-code',
	// 	time: {
	// 		label: '1 month'
	// 	},
	// 	img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697800210476-image.png',
	// 	href: '/new/mvp-build'
	// }
];

export let marketingServices = [
	{
		key: 'logo',
		name: 'Logo',
		amount: 67999,
		href: '/new/logo',
		activateAmount: 999,
		time: {
			label: '2 days'
		},
		description: '3 unique concepts to choose from',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1703607260430-image.png',

		form: {
			cacheId: 'logo',
			buttonText: 'Start Designing',
			defaultValue: {
				description: '',
				references: ''
			},
			fields: [
				{
					name: 'description',
					title: `What design do you need?`,
					description: '',
					placeholder: `I want to design a logo for my product Momentum. It will help founders to monitor their growth daily.`,
					type: 'long-text',
					hints: [`Please share the links to existing assets, if any`],
					isRequired: true
				},
				{
					name: 'references',
					title: `Please send few examples (urls) of designs that you like`,
					description: '',
					placeholder: `I love how clean and simple Linear brand is (https://linear.app)`,
					type: 'long-text',
					// hint: `The more details you share, the better prototype you'll get`,
					isRequired: true
				}
			]
		},
		explainers: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700136655062-image.png'
		],
		portfolio: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127450464-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127512982-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127540453-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127554415-image.png'
		]
	},
	{
		key: 'illustration',
		href: '/new/illustration',
		amount: 5999,
		activateAmount: 999,
		name: 'Illustration',
		time: {
			label: '3 days'
		},

		form: {
			cacheId: 'illustration',
			buttonText: 'Start Designing',
			defaultValue: {
				description: '',
				references: ''
			},
			fields: [
				{
					name: 'description',
					title: `What illustration do you need and for what?`,
					description: '',
					placeholder: `I want to design an illustration for my blog article. Here's the link to it: ...`,
					type: 'long-text',
					hints: [`Please share the links to existing assets, if any`],
					isRequired: true
				},
				{
					name: 'references',
					title: `Please send few examples (urls) of illustrations that you like`,
					description: '',
					placeholder: ``,
					type: 'long-text',
					// hint: `The more details you share, the better prototype you'll get`,
					isRequired: false
				}
			]
		},
		explainers: [],
		portfolio: [
			'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1700127652798-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127670481-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127683618-image.png',
			'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1700127698328-image.png'
		],

		description: 'Illustration',
		img: 'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1700127652798-image.png'
	},
	{
		key: 'icons_pack',
		href: '/new/icons-pack',
		amount: 5999,
		activateAmount: 999,
		name: 'Icons Pack',
		time: {
			label: '3 days'
		},
		form: {
			cacheId: 'icons_pack',
			buttonText: 'Start Designing',
			defaultValue: {
				description: '',
				references: ''
			},
			fields: [
				{
					name: 'description',
					title: `What icons do you need and for what?`,
					description: '',
					placeholder: `I want to design a set of icons for my landing page. Here's the link: ...`,
					type: 'long-text',
					hints: [`Please share the links to existing assets, if any`],
					isRequired: true
				},
				{
					name: 'references',
					title: `Please send few examples (urls) of designs that you like`,
					description: '',
					placeholder: ``,
					type: 'long-text',
					isRequired: false
				}
			]
		},
		description: 'Set of 5 unique icons',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127581977-image.png',
		portfolio: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127581977-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127598221-image.png',
			// 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127819667-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127616319-image.png',
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127628744-image.png'
		],
		explainers: [
			'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700136796754-image.png'
		]
	}
];

export let marketingPortfolio = {
	logos: [
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127450464-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127512982-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127540453-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127554415-image.png'
	],
	icons: [
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127581977-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127598221-image.png',
		// 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127819667-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127616319-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127628744-image.png'
	],
	illustrations: [
		'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1700127652798-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127670481-image.png',
		'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1700127683618-image.png',
		'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1700127698328-image.png'
	]
};

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
	return (
		(
			services.find((s) => s.key === requestType) ||
			marketingServices.find((s) => s.key === requestType)
		)?.name || ''
	);
};

export let getService = (requestType) => {
	return (
		services.find((s) => s.key === requestType) ||
		marketingServices.find((s) => s.key === requestType)
	);
};
