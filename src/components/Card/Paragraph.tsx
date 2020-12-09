import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  line-height: 1.3;
  display: block;
  margin: 0;
`;

export default StyledParagraph;
