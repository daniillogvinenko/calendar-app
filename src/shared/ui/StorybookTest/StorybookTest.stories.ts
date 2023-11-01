import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { StorybookTest } from "./StorybookTest";

const meta: Meta<typeof StorybookTest> = {
    component: StorybookTest,
    title: "shared/StorybookTest",
};

export default meta;
type Story = StoryObj<typeof StorybookTest>;

export const Normal: Story = {
    args: {
        className: "normal",
        text: "some text for testing",
    },
};
