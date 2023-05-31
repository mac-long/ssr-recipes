import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

export default {
	title: "Components/Atoms/Forms/Select",
	component: Select,
	tags: ["autodocs"],
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
