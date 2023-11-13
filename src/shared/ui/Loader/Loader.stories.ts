import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: "shared/Loader",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
    args: {},
};
