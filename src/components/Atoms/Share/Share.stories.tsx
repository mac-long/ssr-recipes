import {
	DevicePhoneMobileIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Meta } from "@storybook/react";
import Share from ".";

export default {
	title: "Components/Atoms/Share",
	component: Share,
	args: {
		options: [
			{
				id: 0,
				icon: <EnvelopeIcon />,
				href: "mailto:?subject=Check%20Out%20This%20Interesting%20Recipe&body=%0ASome sweet default message that lets everyone know how great your website is!%0A%0AEnjoy%21%0A%0A",
			},
			{
				id: 1,
				icon: <DevicePhoneMobileIcon />,
				href: "sms:&body=Enjoy%20this%20ridiculously%20awesome%20message%20I%20have%20sent%20you",
			},
		],
	},
	tags: ["autodocs"],
} as Meta<typeof Share>;

export const Default = {};

export const WithSeperators = {
	args: {
		seperators: true,
	},
};
