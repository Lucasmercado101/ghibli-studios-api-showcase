import Locations from "../pages/Locations/Locations";
import ThemeProvider from "../Theme";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Locations",
  component: Locations,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta;

const Template: Story = () => <Locations />;

export const Primary = Template.bind({});
