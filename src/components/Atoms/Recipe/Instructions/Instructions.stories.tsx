import type { Meta } from "@storybook/react";
import Instructions from ".";
import CreationTime from "../CreationTime";

export default {
	title: "Components/Atoms/Recipe/Instructions",
	component: Instructions,
	args: {
    instructions: [
      "Boil water",
      "Add pasta",
      "Cook for 8 minutes",
      "Drain water",
      "Consume 👾"
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
