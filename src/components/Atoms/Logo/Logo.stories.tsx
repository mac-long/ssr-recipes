import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./index";

export default {
	title: "Components/Atoms/Logo",
	component: Logo,
	tags: ["autodocs"],
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
