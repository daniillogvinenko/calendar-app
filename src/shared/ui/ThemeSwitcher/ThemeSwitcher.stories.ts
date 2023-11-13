import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: "shared/ThemeSwitcher",
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    args: {},
};
