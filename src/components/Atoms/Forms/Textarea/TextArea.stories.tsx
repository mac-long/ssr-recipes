import type { Meta, StoryObj } from "@storybook/react";
import TextArea from ".";

export default {
	title: "Components/Atoms/Forms/TextArea",
	component: TextArea,
	tags: ["autodocs"],
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	args: {
		name: "Message",
		placeholder: "What an incredible message you shall craft.",
	},
};
