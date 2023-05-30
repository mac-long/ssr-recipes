import { UserIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

export default {
	title: "Components/Atoms/Input",
	component: Input,
	tags: ["autodocs"],
	args: {
		name: "Input",
		type: "text",
		placeholder: "Enter your text here...",
	},
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default = {};

export const WithIcon = {
	icon: <UserIcon />,
};
// export const Clear = {};
