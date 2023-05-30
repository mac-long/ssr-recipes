import {
	AcademicCapIcon,
	CogIcon,
	FireIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

export default {
	title: "Components/Atoms/Button",
	component: Button,
	args: {
		type: "button",
	},
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		label: "Button",
	},
};

export const Primary: Story = {
	args: {
		label: "Button",
		primary: true,
	},
};

export const Icon: Story = {
	args: {
		label: "Button",
		icon: <FireIcon />,
	},
};

export const IconRight: Story = {
	args: {
		label: "Button",
		icon: <AcademicCapIcon />,
		reverse: true,
	},
};

export const Loading: Story = {
	args: {
		label: "Button",
		loading: true,
	},
};

export const LoadingColored: Story = {
	args: {
		label: "Button",
		loading: true,
		spinnerColor: "text-teal-600",
	},
};

export const LoadingOnly: Story = {
	args: {
		loading: true,
		spinnerColor: "text-yellow-500",
	},
};

export const LoadingRight: Story = {
	args: {
		label: "Button",
		loading: true,
		reverse: true,
		spinnerColor: "text-red-400",
	},
};

export const Submit: Story = {
	args: {
		label: "Submit",
		type: "submit",
	},
};

export const FullWidth: Story = {
	args: {
		label: "Button",
		fullWidth: true,
	},
};

export const FullWidthIcon: Story = {
	args: {
		label: "Button",
		fullWidth: true,
		icon: <CogIcon />,
	},
};
