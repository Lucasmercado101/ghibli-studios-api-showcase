import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Title";
import SlideUp from "./SlideUp";
import People from "./People";
import Species from "./Species";

const wrapper: React.FC<{ className?: string }> = ({ className, children }) => {
  return (
    <motion.article
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.article>
  );
};

const StyledCard = styled(wrapper)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  border-radius: 8px;
  transition: box-shadow 0.2s;
  background: ${({ theme }) => theme.secondaryDark};
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  }
  .dropdown-toggle {
    margin-top: 10px;
  }
`;

const container = {
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.1,
    },
  },
};

const Subtitle = styled.h3`
  overflow: hidden;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accentDark};
`;

const Paragraph = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
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
  } = data;

  const thereIsPeople = people[0] !== "https://ghibliapi.herokuapp.com/people/";

  return (
    <StyledCard>
      <header style={{ marginBottom: "15px" }}>
        <Title title={title} release_date={release_date} />
        <SlideUp component={<Subtitle>Director &mdash; {director}</Subtitle>} />
        <SlideUp component={<Subtitle>Producer &mdash; {producer}</Subtitle>} />
      </header>
      <SlideUp component={<Paragraph>{description}</Paragraph>} />
      {thereIsPeople && (
        <SlideUp
          className="dropdown-toggle"
          component={<People people={people} />}
        />
      )}
      {species && (
        <SlideUp
          className="dropdown-toggle"
          component={<Species species={species} />}
        />
      )}
    </StyledCard>
  );
};

export default Card;
