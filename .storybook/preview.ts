import type { Preview } from "@storybook/react";
import "../src/app/global.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		storySort: {
			order: [
				"Documentation",
				["Introductions", "Todo"],
				"Components",
				"Pages",
			],
		},
	},
};

export default preview;
