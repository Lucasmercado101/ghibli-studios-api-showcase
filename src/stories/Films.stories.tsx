import Films from "../pages/Films";
import ThemeProvider from "../Theme";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Films",
  component: Films,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta;

const Template: Story = () => <Films />;

export const Primary = Template.bind({});
