import React from "react";
import Card from "../../components/Card/Card";
import SlideUp from "../../components/Card/SlideUp";
import Subtitle from "../../components/Card/Subtitle";
import People from "./People";

const FilmCard: React.FC = () => {
  return (
    <Card
      title={"Howl's Moving Castle"}
      subtitle={"2004"}
      header={
        <>
          <SlideUp
            component={<Subtitle>Director &mdash; Hayao Miyazaki</Subtitle>}
          />
          <SlideUp
            component={<Subtitle>Producer &mdash; Toshio Suzuki</Subtitle>}
          />
        </>
      }
      body="When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home."
      footer={
        <People
          peopleArr={[
            "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
            "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
            "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
            "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
            "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
            "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
            "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061",
            "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
            "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
            "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
          ]}
        />
      }
    />
  );
};

export default FilmCard;
