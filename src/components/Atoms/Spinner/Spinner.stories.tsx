import type { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

export default {
	title: "Components/Atoms/Spinner",
	component: Spinner,
	tags: ["autodocs"],
} as Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Coloured: Story = {
	args: {
		color: "text-red-500",
	},
};
