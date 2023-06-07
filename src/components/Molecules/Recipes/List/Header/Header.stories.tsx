import type { Meta } from "@storybook/react";
import Filters from ".";

export default {
	title: "Components/Molecules/Recipes/Header",
	component: Filters,
	args: {
		title: "Recipes",
		description: "Find your next meal.",
		filters: {
			meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Appetizer"],
			cuisines: ["American", "Chinese", "French", "Indian", "Italian"],
		},
	},
} as Meta;

export const Default = {};
