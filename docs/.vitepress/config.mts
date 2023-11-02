import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Staple',
	description: 'The staple programming language',
	sitemap: {
		hostname: 'https://andriemc.github.io/staple',
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/quick-start' },
		],
		sidebar: [
			{
				text: 'Guide',
				items: [{ text: 'Quick Start', link: '/guide/quick-start' }],
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/andriemc/staple' },
		],
	},
});
