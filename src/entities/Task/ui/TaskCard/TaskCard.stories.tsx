import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { TaskCard } from "./TaskCard";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/storeProvider/ui/StoreProvider";
import { AppTheme } from "app/providers/themeProvider/lib/ThemeContext";

const meta: Meta<typeof TaskCard> = {
    component: TaskCard,
    title: "entities/TaskCard",
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
type Story = StoryObj<typeof TaskCard>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <body className={AppTheme.LIGHT}>
                <Story />
            </body>
        ),
    ],
    args: {
        task: {
            id: 1,
            dateId: 1,
            taskText: "todo something",
            taskTimeFrom: "1100",
            taskTimeTo: "1130",
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
        task: {
            id: 1,
            dateId: 1,
            taskText: "todo something",
            taskTimeFrom: "1100",
            taskTimeTo: "1130",
        },
    },
};
