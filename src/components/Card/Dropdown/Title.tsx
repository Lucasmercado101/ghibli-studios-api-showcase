import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const DropdownTitle = styled.button`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.accent};
  font-weight: 500;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  width: 100%;
  outline: none;
  text-transform: capitalize;
`;

const Title = styled.h4<{ open: boolean }>`
  margin: 0;
  margin-bottom: ${({ open }) => (open ? "5px" : 0)};
  transition: margin-bottom 0.25s;
`;

type StyledProps = { open: boolean };

const Chevron = styled(FaChevronRight)<StyledProps>`
  transform: ${({ open }) => (open ? "rotate(90deg)" : "")};
  transition: transform 0.25s;
  margin: 0;
`;

type Props = {
  title: string;
  isExpanded: boolean;
  onClick: () => void;
};

const Dropdown: React.FC<Props> = ({
  title,
  children,
  isExpanded,
  onClick
}) => {
  return (
    <DropdownTitle className="dropdown-toggle-title" onClick={onClick}>
      {children || <Title open={isExpanded}>{title}</Title>}
      <Chevron open={isExpanded} />
    </DropdownTitle>
  );
};

export default Dropdown;
