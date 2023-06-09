import type { Meta } from "@storybook/react";
import MenuLink from ".";

export default {
	title: "Components/Atoms/Menu Link",
	component: MenuLink,
	args: {
		href: "/testing1234",
		label: "Great Page",
	},
	tags: ["autodocs"],
} as Meta<typeof MenuLink>;

export const Default = {};
