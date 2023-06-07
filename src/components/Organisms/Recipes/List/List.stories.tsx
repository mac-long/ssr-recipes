import type { Meta } from "@storybook/react";
import List from ".";

export default {
	title: "Components/Organisms/Recipes/List",
	component: List,
	args: {
		recipes: [
			{
				id: 1,
				title: "Test Recipe",
				summary:
					"This is a test recipe lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				cuisine: "American",
				meal: "Dinner",
				created_on: "2021-08-01T00:00:00.000Z",
			},
			{
				id: 2,
				title: "Test Recipe 2",
				summary:
					"This is a test recipe lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a test recipe 2.",
				cuisine: "Italian",
				meal: "Breakfast",
				created_on: "2021-08-02T00:00:00.000Z",
			},
		],
	},
	tags: ["autodocs"],
} as Meta;

export const Default = {};
