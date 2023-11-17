import _ from 'lodash';
import { writable } from 'svelte/store';

let tools = [
	{
		key: 'figplate-web',
		name: 'Web App Starter',
		description: '',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697811380471-image.png',
		url: 'https://www.figma.com/file/SqyFdk2OlQuQsriGfoQtEd/Figplate?type=design&node-id=0%3A1&mode=design&t=UV2j6xdJWUCtyB1x-1'
	},
	{
		key: 'figplate-mobile',
		name: 'Mobile App Starter',
		description: '',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697811632396-image.png',
		url: 'https://www.figma.com/file/dWdp1f7Vo9WbpI9SMoOq4E/Figplate-Mobile?type=design&node-id=54-4413&mode=design&t=TpYPGgYX4FzXzwpd-0'
	},
	{
		key: 'ship-ui',
		name: 'Ship Design System',
		description: 'Advanced Design System',
		url: 'https://www.figma.com/file/IVXGkuYntNiy5bYQgurwrs/ship-ui-web?type=design&node-id=3-25&mode=design&t=srW1krKlcMSdhG8E-0'
	},
	{
		key: 'webflow-starters',
		name: 'Landing Pages Starters',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697817502067-image.png',
		url: 'https://webflow.com/@Paralect-Design-Team',
		description: '4 Webflow Templates'
	},
	{
		key: 'scribbles',
		name: 'Scribble Pack',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697813025026-image.png',
		url: 'https://www.figma.com/community/file/1291356570368301625/scribble-pack',
		description: '20+ hand-drawn icons'
	},
	{
		key: 'marketing-pack',
		name: 'Marketing Pack',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697813093453-image.png',
		url: 'https://www.figma.com/community/file/1291750160148525477/social-media-templates',
		description: '10 social media templates in 3 sizes'
	},
	{
		key: 'simple-icon-svg-set',
		name: 'Icon Set',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697813078586-image.png',
		url: 'https://www.figma.com/community/file/1291761276684095954/20-hand-drawn-icon-set',
		description: '20 SVG icons'
	},
	{
		key: 'nice-web-icon-set',
		name: 'Nice Web Icons',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697817073992-image.png',
		url: 'https://www.figma.com/file/Hw0ZejK2izBk3DEvNDek5Z/Trendycons?type=design&node-id=18-4808&mode=design&t=ZHIQsa9MqH7tQJuz-0',
		description: '12 detailed icons in 2 color schemes'
	},
	{
		key: 'pitch-deck-templates',
		name: 'Pitch Deck Templates',
		img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1697817362327-image.png',
		url: 'https://drive.google.com/drive/folders/10sI5OZY944C8Rhw_5gw65ZvmZnT07MiS',
		description: '6 pitch deck templates'
	}
];

export default writable(tools);

export let toolsObj = writable(_.keyBy(tools, 'key'));

export let getTool = (key) => {
	return tools.find((s) => s.key === key);
};
