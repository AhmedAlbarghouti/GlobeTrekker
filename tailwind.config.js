/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "hsl(209, 23%, 22%)", // Dark Mode Elements
				"very-dark-blue-bg": "hsl(207, 26%, 17%)", // Dark Mode Background
				"very-dark-blue-text": "hsl(200, 15%, 8%)", // Light Mode Text
				"dark-gray": "hsl(0, 0%, 52%)", // Light Mode Input
				"very-light-gray": "hsl(0, 0%, 98%)", // Light Mode Background
				white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
			},
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"], // Add this line
			},
		},
	},
	plugins: [],
};
