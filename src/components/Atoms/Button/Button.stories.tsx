import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
	title: "Atoms/Button",
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render: () => <Button primary label="Button" />,
};

export const Secondary: Story = {
	render: () => <Button label="Button" />,
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

// }

// export const Submit: Story = {
// 	render:
// }
