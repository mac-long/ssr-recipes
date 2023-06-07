import { expect } from "@storybook/jest";
import type { Meta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Input from ".";

export default {
	title: "Components/Forms/Input",
	component: Input,
	tags: ["autodocs"],
	args: {
		name: "Input",
		type: "text",
		placeholder: "Enter your text here...",
	},
} as Meta<typeof Input>;

export const Default = {};

export const Tests = {
	args: {
		name: "Input",
		type: "text",
		placeholder: "Enter your text here...",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText("Input");
		const input = canvas.getByRole("textbox");
		expect(label).toHaveTextContent("Input");
		expect(input).toHaveValue("");
		userEvent.type(input, "Hello World!");
		expect(input).toHaveValue("Hello World!");
	},
};
