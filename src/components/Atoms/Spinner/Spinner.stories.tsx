import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import Spinner from "./index";

export default {
	title: "Components/Atoms/Spinner",
	component: Spinner,
} as Meta<typeof Spinner>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Coloured: Story = {
	args: {
		color: "text-green-700",
	},
};
