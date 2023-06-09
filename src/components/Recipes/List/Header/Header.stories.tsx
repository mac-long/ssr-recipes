import type { Meta } from "@storybook/react";
import Filters from ".";

export default {
	title: "Components/Recipes/List/Header",
	component: Filters,
	args: {
		title: "Recipes",
		description: "Find your next meal.",
		filters: {
			meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Appetizer"],
			cuisines: ["American", "Chinese", "French", "Indian", "Italian"],
		},
	},
	tags: ["autodocs"],
} as Meta;

export const Default = {};
