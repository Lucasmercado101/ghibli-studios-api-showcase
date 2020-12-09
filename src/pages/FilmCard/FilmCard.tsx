import React, { ReactNode } from "react";
import Card from "../../components/Card/Card";
import People from "./People";
import Species from "./Species";

type Props = {
  body: string;
  title: string;
  subtitle: string;
  header: ReactNode | ReactNode[];
  speciesArr?: string[];
  peopleArr?: string[];
};

const FilmCard: React.FC<Props> = ({
  peopleArr,
  body,
  title,
  subtitle,
  header,
  speciesArr
}) => {
  const thereArePeople =
    peopleArr && peopleArr[0] !== "https://ghibliapi.herokuapp.com/people/";

  return (
    <Card
      title={title}
      subtitle={subtitle}
      header={header}
      body={body}
      footer={
        <>
          {thereArePeople && <People peopleArr={peopleArr!} />}
          {speciesArr && <Species speciesArr={speciesArr} />}
        </>
      }
    />
  );
};

export default FilmCard;
