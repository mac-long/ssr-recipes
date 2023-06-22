import {
	AcademicCapIcon,
	ArrowLongRightIcon,
	CogIcon,
	FireIcon,
} from "@heroicons/react/24/outline";
import type { Meta } from "@storybook/react";
import Button from ".";


export default {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	args: {
		label: "Get Cooking",
		onClick: () => console.log("test"),
	},
} as Meta<typeof Button>;

export const Default = {};

export const Primary = {
	args: {
		primary: true,
	},
};

export const Icon = {
	args: {
		icon: <FireIcon />,
	},
};

export const IconRight = {
	args: {
		icon: <AcademicCapIcon />,
		reverse: true,
	},
};

export const Loading = {
	args: {
		loading: true,
	},
};

export const LoadingColored = {
	args: {
		loading: true,
		spinnerColor: "text-teal-600",
	},
};

export const LoadingOnly = {
	args: {
		label: undefined,
		loading: true,
	},
};

export const LoadingRight = {
	args: {
		loading: true,
		reverse: true,
	},
};

export const Submit = {
	args: {
		label: "Submit",
		type: "submit",
	},
};

export const Ghost = {
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

export const FullWidth = {
	args: {
		fullWidth: true,
	},
};

export const FullWidthIcon = {
	args: {
		fullWidth: true,
		icon: <CogIcon />,
	},
};

export const FullWidthLoading = {
	args: {
		label: undefined,
		fullWidth: true,
		loading: true,
	},
};
