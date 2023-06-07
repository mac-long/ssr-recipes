import type { Meta } from "@storybook/react";
import Content from ".";

export default {
	title: "Components/Organisms/Recipes/Content",
	component: Content,
	args: {
		meal: "Breakfast",
		title: "Not Eggs",
		image: {
			url: "https://source.unsplash.com/random/800x600",
			photographer: {
				name: "Some Name",
				url: "https://unsplash.com/@some_name",
			},
		},
		summary: "This is a summary",
		ingredients: ["Not Eggs", "Salt", "Pepper"],
		creation_time: 1.2,
		instructions: ["Do this", "Do that", "Do the other thing"],
	},
	decorators: [
		(Story) => (
			<main className="prose">
				<Story />
			</main>
		),
	],
	tags: ["autodocs"],
} as Meta<typeof Content>;

export const Default = {};
