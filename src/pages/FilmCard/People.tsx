import React from "react";
import Dropdown from "../../components/Card/Dropdown/Dropdown";
import { useQuery } from "react-query";
import { fetchUrls } from "../../Api";

type Props = {
  peopleArr: string[];
};

const People: React.FC<Props> = ({ peopleArr }) => {
  const { data, isError, isFetched, refetch } = useQuery(
    "films",
    () => fetchUrls<Person>(peopleArr),
    { enabled: false }
  );

  return (
    <Dropdown title="people" onOpen={() => refetch()}>
      {data && data.map((person) => person.name)}
    </Dropdown>
  );
};

export default People;
