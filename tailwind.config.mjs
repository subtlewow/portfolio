/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		borderWidth: {
      DEFAULT: '1px',
    },
		fontFamily: {
			'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
			'inter-tight': ["Inter Tight", "Inter Tight Placeholder", 'sans-serif'],
			'crimson-pro': ['Crimson Pro', 'sans-serif']
		}
	},
	plugins: [],
}
