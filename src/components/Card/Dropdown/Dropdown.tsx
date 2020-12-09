import React, { useState } from "react";
import Title from "./Title";
import styled from "styled-components";
import Content from "./Content";
import { AnimatePresence } from "framer-motion";

type Props = {
  title: string;
  onOpen?: () => void;
};

const StyledDropdown = styled.section`
  margin: 0;
  padding: 0;
`;

const Dropdown: React.FC<Props> = ({ title, children, onOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledDropdown className="dropdown-toggle-title">
      <Title
        isExpanded={isExpanded}
        onClick={() => {
          !isExpanded && onOpen && onOpen();
          setIsExpanded(!isExpanded);
        }}
        title={title}
      />
      <AnimatePresence>
        {isExpanded && <Content>{children}</Content>}
      </AnimatePresence>
    </StyledDropdown>
  );
};

export default Dropdown;
