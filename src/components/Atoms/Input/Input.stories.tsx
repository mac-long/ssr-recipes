import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

export default {
	title: "Components/Atoms/Input",
	component: Input,
	tags: ["autodocs"],
	args: {
		type: "text",
	},
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default = {};

// export const WithIcon = {};
// export const Clear = {};
