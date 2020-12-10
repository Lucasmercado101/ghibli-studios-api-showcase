import React from "react";
import Dropdown from "../../../components/Card/Dropdown/Dropdown";
import { useQuery } from "react-query";
import { fetchUrls } from "../../../Api";
import Skeleton from "../../../components/Card/DropdownContentSkeleton";
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

const StyledFilmItem = styled.li`
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
  filmArr: string[];
};

const People: React.FC<Props> = ({ filmArr }) => {
  const { data, isError, refetch } = useQuery(
    [filmArr, "unknown"],
    () => fetchUrls<Film>(filmArr),
    { enabled: false }
  );

  return (
    <Dropdown title="films" onOpen={() => refetch()}>
      {isError ? (
        <ErrorText>Error: Could not fetch films</ErrorText>
      ) : !data ? (
        <Skeleton />
      ) : (
        <PeopleList>
          {data.map((film, i) => (
            <StyledFilmItem key={i}>{film.title}</StyledFilmItem>
          ))}
        </PeopleList>
      )}
    </Dropdown>
  );
};

export default People;
