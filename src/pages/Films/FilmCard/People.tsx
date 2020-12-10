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

const PeopleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledPerson = styled.li`
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
  peopleArr: string[];
};

const People: React.FC<Props> = ({ peopleArr }) => {
  const { data, isError, refetch } = useQuery(
    [peopleArr, "unknown"],
    () => fetchUrls<Person>(peopleArr),
    { enabled: false }
  );

  return (
    <Dropdown title="people" onOpen={() => refetch()}>
      {isError ? (
        <ErrorText>Error: Could not fetch people</ErrorText>
      ) : !data ? (
        <Skeleton />
      ) : (
        <PeopleList>
          {data.map((person, i) => (
            <StyledPerson key={i}>{person.name}</StyledPerson>
          ))}
        </PeopleList>
      )}
    </Dropdown>
  );
};

export default People;
