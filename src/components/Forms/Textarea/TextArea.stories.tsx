// @ts-nocheck
import { expect } from "@storybook/jest";
import type { Meta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import TextArea from ".";

export default {
	title: "Components/Forms/TextArea",
	component: TextArea,
	args: {
		name: "Message",
		placeholder: "What an incredible message you shall craft.",
	},
	tags: ["autodocs"],
} as Meta<typeof TextArea>;

export const Default = {};

export const Tests = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole("textbox");
		expect(textarea).toHaveValue("");
		userEvent.type(textarea, "Hello, World!");
		userEvent.clear(textarea);
	},
};
