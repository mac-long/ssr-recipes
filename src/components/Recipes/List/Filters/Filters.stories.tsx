import type { Meta } from "@storybook/react";
import Filters from ".";

export default {
	title: "Components/Recipes/List/Filters",
	component: Filters,
	args: {
		filters: {
			meals: ["Breakfast", "Lunch", "Dinner", "Snack", "Appetizer"],
			cuisines: ["American", "Chinese", "French", "Indian", "Italian"],
		},
	},
} as Meta;

export const Default = {};
