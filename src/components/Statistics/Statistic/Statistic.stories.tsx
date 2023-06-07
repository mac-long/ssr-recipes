import Statistic from ".";

export default {
	title: "Components/Statistics/Statistic",
	args: {
		text: "Statistic Text",
		count: 500000,
	},
	tags: ["autodocs"],
	component: Statistic,
};

export const Default = {};

export const Recipes = {
	args: {
		text: "Recipes & Counting",
		count: 10000,
	},
};

export const Users = {
	args: {
		text: "Wonderful Users",
		count: 5000,
	},
};
