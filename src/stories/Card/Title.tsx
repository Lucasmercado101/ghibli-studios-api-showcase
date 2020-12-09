import React from "react";
import styled from "styled-components";
import SlideUp from "./SlideUp";

const StyledTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.accent};
  display: inline;
  font-weight: 900;
  margin: 0;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.accentDark};
  font-weight: 500;
  display: inline;
  margin: 0;
  margin-left: 10px;
`;

type Props = { title: string; subtitle?: string };

const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <SlideUp style={{ display: "flex", alignItems: "baseline" }}>
      <StyledTitle>{title}</StyledTitle>
      <Subtitle>{subtitle}</Subtitle>
    </SlideUp>
  );
};

export default Title;
