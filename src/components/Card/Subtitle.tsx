import styled from "styled-components";

const Subtitle = styled.p`
  overflow: hidden;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.accentDark};
  font-weight: 500;
  display: inline;
  margin: 0;
`;

export default Subtitle;
