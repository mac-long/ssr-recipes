import {
	AcademicCapIcon,
	ArrowLongRightIcon,
	CogIcon,
	FireIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

export default {
	title: "Components/Atoms/Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		label: "Get Cooking",
		onClick: () => console.log("test"),
	},
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
	args: {
		primary: true,
	},
};

export const Icon: Story = {
	args: {
		icon: <FireIcon />,
	},
};

export const IconRight: Story = {
	args: {
		icon: <AcademicCapIcon />,
		reverse: true,
	},
};

export const Loading: Story = {
	args: {
		loading: true,
	},
};

export const LoadingColored: Story = {
	args: {
		loading: true,
		spinnerColor: "text-teal-600",
	},
};

export const LoadingOnly: Story = {
	args: {
		label: undefined,
		loading: true,
	},
};

export const LoadingRight: Story = {
	args: {
		loading: true,
		reverse: true,
	},
};

export const Submit: Story = {
	args: {
		label: "Submit",
		type: "submit",
	},
};

export const Ghost: Story = {
	args: {
		ghost: true,
	},
};

export const GhostWithIcon = {
	args: {
		ghost: true,
		reverse: true,
		icon: <ArrowLongRightIcon />,
	},
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
};

export const FullWidthIcon: Story = {
	args: {
		fullWidth: true,
		icon: <CogIcon />,
	},
};

export const FullWidthLoading: Story = {
	args: {
		label: undefined,
		fullWidth: true,
		loading: true,
	},
};
