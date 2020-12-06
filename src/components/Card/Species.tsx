import React from "react";
import { useQuery } from "react-query";
import { fetchUrls } from "../../Api";
import ContentLoader from "react-content-loader";
import Dropdown from "./Dropdown/Dropdown";
import DropdownContent from "./Dropdown/Content";
import { ClassificationType } from "typescript";
import styled from "styled-components";

type Props = {
  species: string[];
};

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={120}
    viewBox="0 0 400 120"
    backgroundColor="white"
    foregroundColor="#f2a365"
  >
    <rect x="0" y="13" width="20" height="5" />
    <rect x="30" y="10" rx="5" ry="5" width="200" height="10" />
    <rect x="0" y="43" width="20" height="5" />
    <rect x="30" y="40" rx="5" ry="5" width="200" height="10" />
    <rect x="0" y="73" width="20" height="5" />
    <rect x="30" y="70" rx="5" ry="5" width="200" height="10" />
    <rect x="0" y="103" width="20" height="5" />
    <rect x="30" y="100" rx="5" ry="5" width="200" height="10" />
  </ContentLoader>
);

const Classification = styled.div`
  color: #a9865c;
  display: inline;
`;

const Species: React.FC<Props> = ({ species }) => {
  const { data, refetch, isFetched } = useQuery(
    species,
    () => fetchUrls<Species>(species),
    {
      enabled: false
    }
  );
  const thereArePeople =
    species[0] !== "https://ghibliapi.herokuapp.com/people/";

  if (!thereArePeople) return null;

  return (
    <Dropdown title="species" onOpenClick={() => refetch()}>
      <DropdownContent>
        {isFetched ? (
          data &&
          data.map(({ id, name, classification }) => (
            <li key={id}>
              {name}
              <Classification> &mdash; {classification}</Classification>
            </li>
          ))
        ) : (
          <MyLoader />
        )}
      </DropdownContent>
      {/* <MyLoader /> */}
    </Dropdown>
  );
};

export default Species;
