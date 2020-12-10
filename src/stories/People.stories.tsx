import People from "../pages/People/People";
import ThemeProvider from "../Theme";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/People",
  component: People,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta;

const Template: Story = () => <People />;

export const Primary = Template.bind({});
