import type { Meta } from "@storybook/react";
import Input from ".";

export default {
	title: "Components/Atoms/Forms/Input",
	component: Input,
	tags: ["autodocs"],
	args: {
		name: "Input",
		type: "text",
		placeholder: "Enter your text here...",
	},
} as Meta<typeof Input>;

export const Default = {};
