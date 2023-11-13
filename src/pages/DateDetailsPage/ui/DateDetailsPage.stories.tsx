import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { DateDetailsPage } from "./DateDetailsPage";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/storeProvider/ui/StoreProvider";
import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";

const meta: Meta<typeof DateDetailsPage> = {
    component: DateDetailsPage,
    title: "pages/DateDetailsPage",
    decorators: [
        (Story) => (
            <StoreProvider>
                <Story />
            </StoreProvider>
        ),
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof DateDetailsPage>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.LIGHT}>
                <Story />
            </body>
        ),
    ],
    args: {},
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.DARK}>
                <Story />
            </body>
        ),
    ],
    args: {},
};
