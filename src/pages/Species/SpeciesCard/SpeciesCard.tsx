import React from "react";
import Card from "../../../components/Card/Card";
import Paragraph from "../../../components/Card/Paragraph";
import styled from "styled-components";
import People from "./People";
import Films from "./Films";
import SlideUp from "../../../components/Card/SlideUp";

type Props = {
  data: Species;
};

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

const SpeciesCard: React.FC<Props> = ({
  data: { classification, eye_colors, films, hair_colors, name, people }
}) => {
  const colorsArr = eye_colors.split(",").map((color) => color.trim());
  const hairColorsArr = hair_colors.split(",").map((color) => color.trim());

  return (
    <Card
      title={name}
      subtitle={classification}
      body={
        <div style={{ marginBottom: 10 }}>
          {colorsArr.length > 1 ? (
            <List>
              <Paragraph>
                <Strong>Eye Colors: </Strong>
                {colorsArr.map((color) => (
                  <ListItem>{color}</ListItem>
                ))}
              </Paragraph>
            </List>
          ) : (
            <Paragraph>
              <Strong>Eye Color: </Strong>
              {eye_colors}
            </Paragraph>
          )}

          {hairColorsArr.length > 1 ? (
            <List>
              <Paragraph>
                <Strong>Hair Colors: </Strong>
                {hairColorsArr.map((color) => (
                  <ListItem>{color}</ListItem>
                ))}
              </Paragraph>
            </List>
          ) : (
            <Paragraph>
              <Strong>Hair Color: </Strong>
              {eye_colors}
            </Paragraph>
          )}
        </div>
      }
      footer={
        <>
          {people && <People peopleArr={people} />}
          {films && <Films filmArr={films} />}
        </>
      }
    />
  );
};

export default SpeciesCard;
