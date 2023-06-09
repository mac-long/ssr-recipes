import { ShareIcon } from "@heroicons/react/24/outline";
import type { Meta } from "@storybook/react";
import Hero from ".";

export default {
	title: "Components/Hero",
	component: Hero,
	args: {
		title: "Share your favourites",
		description:
			"Send the recipe to the whole family so everyone can try out the amazing recipes you discover and enjoy.",
		buttons: [
			{
				label: "Share",
				href: "https://google.com",
			},
			{
				label: "Share",
				href: "https://google.com",
				icon: <ShareIcon />,
				primary: true,
			},
		],
	},
	tags: ["autodocs"],
} as Meta<typeof Hero>;

export const Default = {};
