import Vehicles from "../pages/Vehicles/Vehicles";
import ThemeProvider from "../Theme";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Vehicles",
  component: Vehicles,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta;

const Template: Story = () => <Vehicles />;

export const Primary = Template.bind({});
