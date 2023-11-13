import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { LangSwitcher } from "./LangSwitcher";

const meta: Meta<typeof LangSwitcher> = {
    component: LangSwitcher,
    title: "shared/LangSwitcher",
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Normal: Story = {
    args: {},
};
