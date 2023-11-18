import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { Modal } from "./Modal";
import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: "shared/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children: "SOME TEXT FOR TESTING",
        isOpened: true,
    },
    decorators: [
        (Story) => (
            <body className={AppTheme.LIGHT}>
                <Story />
            </body>
        ),
    ],
};

export const Dark: Story = {
    args: {
        children: "SOME TEXT FOR TESTING",
        isOpened: true,
    },
    decorators: [
        (Story) => (
            <body className={AppTheme.DARK}>
                <Story />
            </body>
        ),
    ],
};
