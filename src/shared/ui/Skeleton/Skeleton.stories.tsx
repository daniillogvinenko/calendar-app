import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { Skeleton } from "./Skeleton";
import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";

const meta: Meta<typeof Skeleton> = {
    component: Skeleton,
    title: "shared/Skeleton",
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.LIGHT}>
                <Story />
            </body>
        ),
    ],
    args: {
        styleProp: {
            border: "15px",
            width: 500,
            height: 70,
        },
    },
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.DARK}>
                <Story />
            </body>
        ),
    ],
    args: {
        styleProp: {
            border: "15px",
            width: 500,
            height: 70,
        },
    },
};
