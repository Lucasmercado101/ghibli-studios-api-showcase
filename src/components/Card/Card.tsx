import React, { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "./Title";
import SlideUp from "./SlideUp";
import Paragraph from "./Paragraph";

const container = {
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.1
    }
  }
};

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
  max-width: 45ch;
  transition: box-shadow 0.2s;
  background: ${({ theme }) => theme.secondaryDark};
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  }
  .dropdown-toggle {
    margin-top: 10px;
  }
`;

export type Props = {
  title: string;
  subtitle?: string;
  header?: ReactNode | ReactNode[];
  body?: string;
  footer?: ReactNode | ReactNode[];
};

const Card: React.FC<Props> = ({
  children,
  title,
  subtitle,
  header,
  body,
  footer
}) => {
  return (
    <StyledCard>
      <header style={{ marginBottom: 10 }}>
        {title && <Title title={title} subtitle={subtitle} />}
        {header}
      </header>
      {(body || children) && (
        <SlideUp
          component={
            <Paragraph style={{ marginBottom: 5 }}>
              {body || children}
            </Paragraph>
          }
        />
      )}
      <SlideUp component={footer} />
    </StyledCard>
  );
};

export default Card;
