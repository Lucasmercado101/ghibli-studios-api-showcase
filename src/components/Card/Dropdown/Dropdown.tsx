import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

type Props = { title: string; onOpenClick?: () => {} };

const DropdownTitle = styled.button`
  display: flex;
  justify-content: space-between;
  color: #f2a365;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  width: 100%;
  outline: none;
  text-transform: capitalize;
`;

type StyledProps = { open: boolean };

const Chevron = styled(FaChevronRight)<StyledProps>`
  transform: ${({ open }) => (open ? "rotate(90deg)" : "")};
  transition: transform 0.25s;
`;

const Dropdown: React.FC<Props> = ({ title, children, onOpenClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <DropdownTitle
        className="dropdown-toggle-title"
        onClick={() => {
          setExpanded(!expanded);
          if (!expanded) onOpenClick && onOpenClick();
        }}
      >
        <p>{title}</p>
        <Chevron open={expanded} />
      </DropdownTitle>
      <AnimatePresence>{expanded && children}</AnimatePresence>
    </>
  );
};

export default Dropdown;
