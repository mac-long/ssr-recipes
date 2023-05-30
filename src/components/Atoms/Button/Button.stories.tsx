import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

export default {
	title: "Components/Atoms/Button",
	component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: () => <Button label="Button" />,
};

export const Primary: Story = {
	render: () => <Button primary label="Button" />,
};

// export const Icon: Story = {
// 	render: () => <Button label="Button" icon={FireIcon} />
// }

// export const IconRight: Story = {
// 	render: () => <Button label="Button" icon={}
// }

// export const Loading: Story = {
// 	render:
// }

// export const LoadingOnly: Story = {
// render:
// }

// export const LoadingRight: Story = {
//	render:
// }

// export const Submit: Story = {
// 	render:
// }
