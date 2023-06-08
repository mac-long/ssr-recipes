// @ts-nocheck
import { expect } from "@storybook/jest";
import type { Meta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import Hero from ".";

export default {
	title: "Components/Footer/Newsletter/Form",
	component: Hero,
	args: {},
	tags: ["autodocs"],
} as Meta<typeof Hero>;

export const Default = {};

export const Tests = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const nameInput = canvas.getByLabelText("Name");
		const emailInput = canvas.getByLabelText("Email");
		const submitButton = canvas.getByRole("button");
		expect(nameInput).toHaveValue("");
		expect(emailInput).toHaveValue("");
		userEvent.type(nameInput, "Great Name");
		userEvent.type(emailInput, "name@mail.com");
		expect(nameInput).toHaveValue("Great Name");
		expect(emailInput).toHaveValue("name@mail.com");
		userEvent.click(submitButton);
		userEvent.clear(nameInput);
		userEvent.clear(emailInput);
		expect(nameInput).toHaveValue("");
		expect(emailInput).toHaveValue("");
	},
};
