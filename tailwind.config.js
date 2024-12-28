/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#005f73" /* Ocean Blue */,
				secondary: "#0a9396" /* Aqua Green */,
				accent: "#e9d8a6" /* Golden Sand */,
				neutralLight: "#e5e5e5" /* Cream White */,
				neutralDark: "#27272a" /* Charcoal Gray */,
				/* 
					Primary Color - Ocean Blue: #005F73 Use for headers, navigation bars, and main buttons.
					Secondary Color - Aqua Green: #0A9396 Use for highlights, secondary buttons, or hover effects.
					Accent Color - Golden Sand: #E9D8A6 Use for subtle accents, icons, or section dividers.
					Neutral Light - Cream White: #E5E5E5 Use as the background color for light sections.
					Neutral Dark - Charcoal Gray: #27272A Use for text, footers, or darker sections. 
				*/
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
