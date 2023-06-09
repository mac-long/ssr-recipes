import type { Meta } from "@storybook/react";
import Card from ".";

export default {
	title: "Components/Recipes/List/Card",
	component: Card,
	args: {
		id: 1,
		title: "Recipe Title",
		summary: "Recipe Summary",
		cuisine: "Recipe Cuisine",
		meal: "Recipe Meal",
		created_on: "2021-08-01T00:00:00.000Z",
	},
	tags: ["autodocs"],
} as Meta;

export const Default = {};
