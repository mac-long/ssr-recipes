import type { Meta } from "@storybook/react";
import CreationTime from ".";

export default {
	title: "Components/Atoms/Creation Time",
	component: CreationTime,
  args: {
    time: "90 minutes"
  },
	tags: ["autodocs"],
  decorators: [
    Story => (
      <main className="prose">
        <Story />
      </main>
    )
  ]
} as Meta<typeof CreationTime>;

export const Default = {};
export const OtherTime = {
  args: {
    time: "1.5 hours"
  }
};
