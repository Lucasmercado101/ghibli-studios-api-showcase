import Species from "../pages/Species/Species";
import ThemeProvider from "../Theme";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Species",
  component: Species,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta;

const Template: Story = () => <Species />;

export const Primary = Template.bind({});
