import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import ThemeProvider from "../Theme";
import Card from "./Card";
import Title from "./Title";
import Paragraph from "./Paragraph";
import SlideUp from "./SlideUp";
import styled from "styled-components";
import Dropdown from "./Dropdown/Dropdown";
import { Story } from "@storybook/react/types-6-0";
import { Props as CardProps } from "./Card";

const Subtitle = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.accentDark};
  font-weight: 500;
  display: inline;
  margin: 0;
`;

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
} as Meta;

const Template: Story<CardProps> = ({ title, subtitle, body }) => (
  <Card
    title={title}
    subtitle={subtitle}
    header={
      <>
        <SlideUp
          component={<Subtitle>Director &mdash; Hayao Miyazaki</Subtitle>}
        />
        <SlideUp
          component={<Subtitle>Producer &mdash; Toshio Suzuki</Subtitle>}
        />
      </>
    }
    body={body}
    footer={
      <Dropdown title="people">
        <li>asdasd</li>
        <li>asdasd</li>
      </Dropdown>
    }
  />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Howl's Moving Castle",
  subtitle: "2004",
  body:
    "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home."
};

// {
//   "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
//   "rt_score": "87",
//   "people": [
//     "https://ghibliapi.herokuapp.com/people/"
//   ],
//   "species": [
//     "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
//   ],
//   "locations": [
//     "https://ghibliapi.herokuapp.com/locations/"
//   ],
//   "vehicles": [
//     "https://ghibliapi.herokuapp.com/vehicles/"
//   ],
//   "url": "https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa"
// },
