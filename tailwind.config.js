/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,mdx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			animation: {
				fadeIn: "fadeIn .3s ease-in",
				slideLeft: "slideLeft .5s ease-in",
				slideRight: "slideRight .5s ease-in",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				slideLeft: {
					"0%": { opacity: 0, transform: "translateX(-50px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				slideRight: {
					"0%": { opacity: 0, transform: "translateX(110%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
