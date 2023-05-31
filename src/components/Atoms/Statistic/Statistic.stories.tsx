import { StoryObj } from "@storybook/react";
import Statistic from ".";

export default {
	title: "Components/Atoms/Statistic",
	tags: ["autodocs"],
	component: Statistic,
};

type Story = StoryObj<typeof Statistic>;

export const Default: StoryObj = {
	args: {
		text: "Statistic Text",
		count: 500000,
	},
};

export const Recipes: StoryObj = {
	args: {
		text: "Recipes & Counting",
		count: 100000,
	},
};

export const Users: StoryObj = {
	args: {
		text: "Wonderful Users",
		count: 50000,
	},
};
