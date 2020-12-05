import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Title";
import SlideUp from "./SlideUp";

const StyledCard = styled.article`
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  border-radius: 10px;
  transition: box-shadow 0.2s;
  background: #222831;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  }
`;

const container = {
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.1
    }
  }
};

const Subtitle = styled.h3`
  overflow: hidden;
  font-size: 1rem;
  font-weight: 500;
  color: #a9865c;
`;

const Paragraph = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ececec;
  line-height: 1.3;
  display: block;
`;

type Props = { data: Film };

const Card: React.FC<Props> = ({ data }) => {
  const {
    title,
    description,
    director,
    producer,
    release_date,
    people,
    species,
    vehicles
  } = data;
  return (
    <StyledCard>
      <motion.div variants={container} initial="hidden" animate="visible">
        <header style={{ marginBottom: "15px" }}>
          <Title title={title} release_date={release_date} />
          <SlideUp
            component={<Subtitle>Director &mdash; {director}</Subtitle>}
          />
          <SlideUp
            component={<Subtitle>Producer &mdash; {producer}</Subtitle>}
          />
        </header>
        <SlideUp component={<Paragraph>{description}</Paragraph>} />
      </motion.div>
      <br></br>
      {/* <p>{species}</p>
      <p>{vehicles}</p>
      <p>{people}</p> */}
    </StyledCard>
  );
};

export default Card;
