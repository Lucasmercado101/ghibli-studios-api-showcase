import React from "react";
import Dropdown from "../../../components/Card/Dropdown/Dropdown";
import { useQuery } from "react-query";
import { fetchUrls } from "../../../Api";
import Skeleton from "./DropdownContentSkeleton";
import styled from "styled-components";

const ErrorText = styled.p`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.accent};
`;

const SpeciesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledSpecies = styled.li`
  margin: 0;
  padding: 0;
  line-height: 1.6;
  &::before {
    content: "—";
    color: ${({ theme }) => theme.accentDark};
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-right: 5px;
  }
`;

type Props = {
  speciesArr: string[];
};

const People: React.FC<Props> = ({ speciesArr }) => {
  const { data, isError, refetch } = useQuery(
    speciesArr,
    () => fetchUrls<Species>(speciesArr),
    { enabled: false }
  );

  return (
    <Dropdown title="species" onOpen={() => refetch()}>
      {isError ? (
        <ErrorText>Error: Could not fetch people</ErrorText>
      ) : !data ? (
        <Skeleton />
      ) : (
        <SpeciesList>
          {data.map((species, i) => (
            <StyledSpecies key={i}>{species.name}</StyledSpecies>
          ))}
        </SpeciesList>
      )}
    </Dropdown>
  );
};

export default People;
