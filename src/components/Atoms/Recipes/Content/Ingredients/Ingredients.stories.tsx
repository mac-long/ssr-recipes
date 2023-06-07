import type { Meta } from "@storybook/react";
import Ingredients from ".";

export default {
	title: "Components/Atoms/Recipe/Content/Ingredients",
	component: Ingredients,
	args: {
		ingredients: [
			"1 1/2 cups gingersnap cookie crumbs",
			"1/2 cup chopped pecans",
			"1/3 cup butter, melted",
			"3 (8 ounce) packages cream cheese, softened",
			"1/2 cup white sugar",
			"1/2 teaspoon vanilla extract",
			"3 eggs",
		],
	},
	decorators: [
		(Story) => (
			<main className="prose">
				<Story />
			</main>
		),
	],
	tags: ["autodocs"],
} as Meta<typeof Ingredients>;

export const Default = {};
