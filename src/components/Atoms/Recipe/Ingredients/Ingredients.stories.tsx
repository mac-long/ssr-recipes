import type { Meta } from "@storybook/react";
import Ingredients from ".";
import CreationTime from "../CreationTime";

export default {
	title: "Components/Atoms/Recipe/Ingredients",
	component: Ingredients,
	args: {
    ingredients: [
      "1 cup of flour",
      "1 cup of sugar",
      "1 cup of butter",
      "1 cup of love",
    ],
	},
  decorators: [
    (Story) => (
      <main className="propse">
        <Story />
      </main>
    )
  ],
	tags: ["autodocs"]
} as Meta<typeof CreationTime>;

export const Default = {};
