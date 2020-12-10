import React from "react";
import { useQuery } from "react-query";
import Card from "../../../components/Card/Card";
import Paragraph from "../../../components/Card/Paragraph";
import { getSpeciesByID, fetchUrls } from "../../../Api";
import styled from "styled-components";

const FilmsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledFilm = styled.li`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.primary};
  &::before {
    content: "—";
    color: ${({ theme }) => theme.accentDark};
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-right: 5px;
  }
`;

const Strong = styled.span`
  color: ${({ theme }) => theme.accent};
`;

type Props = {
  data: Person;
};

const PersonCard: React.FC<Props> = ({
  data: { name, age, eye_color, gender, hair_color, species, films }
}) => {
  const { data: speciesData } = useQuery([species, "specific"], () =>
    getSpeciesByID(species)
  );
  const { data: filmsData } = useQuery([films, "specific"], () =>
    fetchUrls<Film>(films)
  );

  return (
    <Card
      title={name}
      subtitle={age === "NA" ? "N/A" : age}
      body={
        <>
          <Paragraph>
            <Strong>Eye Color: </Strong> {eye_color}
          </Paragraph>
          <Paragraph>
            <Strong>Gender: </Strong> {gender}
          </Paragraph>
          <Paragraph>
            <Strong>Hair Color: </Strong> {hair_color}
          </Paragraph>
        </>
      }
      footer={
        <>
          <Paragraph>
            <Strong>Species: </Strong> {speciesData?.name}
          </Paragraph>
          <Paragraph>
            <Strong>Films:</Strong>
          </Paragraph>
          {filmsData && (
            <FilmsList>
              {filmsData.map((filmEl) => (
                <StyledFilm>{filmEl.title}</StyledFilm>
              ))}
            </FilmsList>
          )}
        </>
      }
    />
  );
};

export default PersonCard;
