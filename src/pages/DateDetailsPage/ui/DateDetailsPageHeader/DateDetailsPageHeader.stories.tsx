import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { DateDetailsPageHeader } from "./DateDetailsPageHeader";
import { Provider } from "react-redux";
import { store } from "app/providers/storeProvider/config/store";
import { BrowserRouter } from "react-router-dom";
import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";

const meta: Meta<typeof DateDetailsPageHeader> = {
    component: DateDetailsPageHeader,
    title: "pages/DateDetailsPageHeader",
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof DateDetailsPageHeader>;

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
