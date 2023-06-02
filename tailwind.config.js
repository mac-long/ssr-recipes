/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,mdx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			animation: {
				fadeIn: "fadeIn .3s ease-in",
				fadeOut: "fadeOut .3s ease-out",
				slideLeft: "slideLeft .5s ease-in",
				slideRight: "slideRight .5s ease-in",
				slideUp: "slideUp .3s ease-out",
				slideDown: "slideDown .3s ease-in",
				rotate180: "rotate180 .3s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				slideLeft: {
					"0%": { opacity: 0, transform: "translateX(-50px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				slideRight: {
					"0%": { opacity: 0, transform: "translateX(110%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				slideUp: {
					"0%": { opacity: 1, transform: "translateY(0)", zIndex: 10 },
					"100%": { opacity: 0, transform: "translateY(-50%)", zIndex: -10 },
				},
				slideDown: {
					"0%": { opacity: 0, transform: "translateY(-50%)", zIndex: -10 },
					"100%": { opacity: 1, transform: "translateY(0)", zIndex: 10 },
				},
				rotate180: {
					"0%": { transform: "rotate(180deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
