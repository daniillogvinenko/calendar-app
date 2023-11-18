import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { Loader } from "./Loader";
import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: "shared/Loader",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.LIGHT}>
                <Story />
            </body>
        ),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.DARK}>
                <Story />
            </body>
        ),
    ],
};
