import type { Meta } from "@storybook/react";
import TextArea from ".";

export default {
	title: "Components/Atoms/Forms/TextArea",
	component: TextArea,
	tags: ["autodocs"],
} as Meta<typeof TextArea>;


export const Default = {
	args: {
		name: "Message",
		placeholder: "What an incredible message you shall craft.",
	},
};
