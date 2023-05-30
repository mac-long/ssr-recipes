import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@storybook/addon-storysource",
		"@storybook/test-runner",
		"storybook-mobile",
		{
			name: "@storybook/addon-styling",
			options: {
				postCss: true,
			},
		},
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
