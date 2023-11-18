import type { Meta, StoryObj } from "@storybook/react";
import "shared/styles/index.scss";
import { DateDetailsPageList } from "./DateDetailsPageList";
import { Provider } from "react-redux";
import { store } from "app/providers/storeProvider/config/store";

const meta: Meta<typeof DateDetailsPageList> = {
    component: DateDetailsPageList,
    title: "pages/DateDetailsPageList",
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof DateDetailsPageList>;

export const Normal: Story = {
    args: {},
};
