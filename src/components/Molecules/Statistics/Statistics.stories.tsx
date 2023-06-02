import type { Meta } from "@storybook/react";
import Statistics from ".";

export default {
	title: "Components/Molecules/Statistics",
	component: Statistics,
	args: {
		statistics: [
			{
				text: "Recipes",
				count: 100,
			},
			{
				text: "Ingredients",
				count: 1000,
			},
			{
				text: "Users",
				count: 10000,
			}
		]
	},
	tags: ["autodocs"],
} as Meta<typeof Statistics>;

export const Default = {};
