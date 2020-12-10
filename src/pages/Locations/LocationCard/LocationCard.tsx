import React from "react";
import Card from "../../../components/Card/Card";
import Paragraph from "../../../components/Card/Paragraph";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchUrls } from "../../../Api";

const Strong = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
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
  data: APILocation;
};

const LocationCard: React.FC<Props> = ({
  data: { name, climate, films, residents, surface_water, terrain }
}) => {
  const { data: filmsData } = useQuery(films, () => fetchUrls<Film>(films));
  const { data: residentsData } = useQuery(residents, () => {
    if (residents[0] !== "TODO") return fetchUrls<Person>(residents);
  });

  const thereAreResidents = residentsData && residentsData.length > 0;
  const thereIsSurfaceWater = surface_water !== "TODO";
  const thereIsClimate = climate !== "TODO";
  const thereIsTerrain = terrain !== "TODO";

  return (
    <Card
      title={name}
      body={
        <>
          {thereIsClimate && (
            <Paragraph>
              <Strong>Climate: </Strong>
              {climate}
            </Paragraph>
          )}
          {thereIsSurfaceWater && (
            <Paragraph>
              <Strong>Surface Water: </Strong>
              {surface_water}
            </Paragraph>
          )}
          {thereIsTerrain && (
            <Paragraph>
              <Strong>Terrain: </Strong>
              {terrain}
            </Paragraph>
          )}
        </>
      }
      footer={
        <>
          <Paragraph>
            <Strong>Films: </Strong>
            {filmsData && (
              <List>
                {filmsData.map((film) => (
                  <ListItem key={film.id}>{film.title}</ListItem>
                ))}
              </List>
            )}
          </Paragraph>
          {thereAreResidents && (
            <Paragraph>
              <Strong>Residents: </Strong>
              <List>
                {residentsData!.map((resident) => (
                  <ListItem key={resident.id}>{resident.name}</ListItem>
                ))}
              </List>
            </Paragraph>
          )}
        </>
      }
    />
  );
};

export default LocationCard;
