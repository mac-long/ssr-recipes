import type { Meta } from "@storybook/react";
import Select from ".";
import { within } from "@storybook/testing-library";

export default {
	title: "Components/Forms/Select",
	component: Select,
	args: {
		name: "Wonderful Select",
		options: [
			{ name: "Option 1", value: "Value 1" },
			{ name: "Option 2", value: "Value 2" },
		],
	},
	tags: ["autodocs"],
} as Meta<typeof Select>;

export const Default = {};

export const Multiple = {
	args: {
		multiple: true,
	},
};

export const Tests = {
	play: ({canvasElement}: {canvasElement: HTMLCanvasElement}) => {
		const canvas = within(canvasElement);

	}
}