import React from "react";
import Card from "../../../components/Card/Card";
import Paragraph from "../../../components/Card/Paragraph";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getFilmById, getPersonById } from "../../../Api";

const Strong = styled.span`
  color: ${({ theme }) => theme.accent};
`;

type Props = {
  data: Vehicle;
};

const VehiclesCard: React.FC<Props> = ({
  data: { description, films, length, name, pilot, vehicle_class }
}) => {
  const { data: filmData } = useQuery([films, "specific"], () =>
    getFilmById(films)
  );

  const { data: personData } = useQuery([pilot, "specific"], () =>
    getPersonById(pilot)
  );

  return (
    <Card
      title={name}
      subtitle={vehicle_class}
      body={
        <>
          <Paragraph>{description}</Paragraph>
          <Paragraph>
            <Strong>Length: </Strong>
            {`${length} Ft.`}
          </Paragraph>
        </>
      }
      footer={
        <>
          {filmData && (
            <Paragraph>
              <Strong>Film: </Strong>
              {filmData.title}
            </Paragraph>
          )}
          {personData && (
            <Paragraph>
              <Strong>Pilot: </Strong>
              {personData.name}
            </Paragraph>
          )}
        </>
      }
    />
  );
};

export default VehiclesCard;
