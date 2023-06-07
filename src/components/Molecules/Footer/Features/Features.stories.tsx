import { CameraIcon, CogIcon } from "@heroicons/react/24/outline";
import type { Meta } from "@storybook/react";
import NewsletterFeatures from ".";

export default {
	title: "Components/Molecules/Footer/Newsletter/Features",
	component: NewsletterFeatures,
	args: {
		features: [
			{
				name: "Feature 1",
				description: "Feature 1 description",
				icon: <CogIcon className="w-5 h-5 text-white" />,
			},
			{
				name: "Feature 2",
				description: "Feature 2 description",
				icon: <CameraIcon className="w-5 h-5 text-white" />,
			},
		],
	},
	tags: ["autodocs"],
} as Meta<typeof NewsletterFeatures>;

export const Default = {};
