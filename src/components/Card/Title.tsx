import React from "react";
import styled from "styled-components";
import SlideUp from "./SlideUp";

const StyledTitle = styled.h2`
  overflow: hidden;
  font-size: 1.8rem;
  font-weight: 900;
  color: #f2a365;
  display: inline;
`;

const Subtitle = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  color: #a9865c;
  font-weight: 500;
  display: inline;
  margin-left: 10px;
`;

type Props = { title: string; release_date: string };

const Title: React.FC<Props> = ({ title, release_date }) => {
  return (
    <SlideUp>
      <StyledTitle>{title}</StyledTitle>
      <Subtitle>{release_date}</Subtitle>
    </SlideUp>
  );
};

export default Title;
