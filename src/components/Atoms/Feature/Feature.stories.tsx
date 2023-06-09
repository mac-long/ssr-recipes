import { ShareIcon } from "@heroicons/react/24/outline";
import type { Meta } from "@storybook/react";
import Statistics from ".";

export default {
	title: "Components/Molecules/Feature",
	component: Statistics,
	args: {
		icon: <ShareIcon className="w-5 h-5 text-gray-200" />,
		name: "Share your favourites",
		description:
			"Send the recipe to the whole family so everyone can try out the amazing recipes you discover and enjoy.",
	},
	tags: ["autodocs"],
} as Meta<typeof Statistics>;

export const Default = {};
