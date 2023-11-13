import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { AppLink } from "./AppLink";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: "shared/AppLink",
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Normal: Story = {
    args: {
        children: "TEXT",
        to: "",
    },
};
