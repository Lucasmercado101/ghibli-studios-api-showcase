import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.secondaryDark};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const LinksList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MyLink: React.FC<{ to: string; className?: string }> = ({
  className,
  to,
  children
}) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

const StyledLink = styled(MyLink)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: 1.7rem;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <LinksList>
        <li>
          <StyledLink to="/">Films</StyledLink>
        </li>
        <li>
          <StyledLink to="/vehicles">Vehicles</StyledLink>
        </li>
        <li>
          <StyledLink to="/locations">Locations</StyledLink>
        </li>
        <li>
          <StyledLink to="/people">People</StyledLink>
        </li>
        <li>
          <StyledLink to="/species">Species</StyledLink>
        </li>
      </LinksList>
    </Nav>
  );
};

export default Navbar;
