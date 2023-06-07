import type { Meta } from "@storybook/react";
import Header from ".";

export default {
	title: "Components/Molecules/Recipes/Header",
	component: Header,
	args: {
		title: "Recipes",
		description: "A collection of recipes.",
		children: null,
	},
	tags: ["autodocs"],
} as Meta<typeof Header>;

export const Default = {};
