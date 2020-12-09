import { motion } from "framer-motion";
import FilmCard from "./FilmCard/FilmCard";
import { useQuery } from "react-query";
import { getFilms } from "../Api";
import styled from "styled-components";
import SlideUp from "../components/Card/SlideUp";
import Subtitle from "../components/Card/Subtitle";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const variants = {
  hidden: { y: "50%", opacity: 0, display: "none" },
  visible: { y: 0, opacity: 1, display: "block" }
};

const containerDiv = ({ className, children }: any) => {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const Items = styled(containerDiv)`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(45ch, 1fr));
  align-items: flex-start;
  padding: 50px;
`;

const Films: React.FC = () => {
  const { data, isFetched, isError } = useQuery("films", getFilms);

  if (isError) return <p>ERROR</p>;

  return (
    <Items>
      {data &&
        data.map((film) => (
          <FilmCard
            title={film.title}
            subtitle={film.release_date}
            header={
              <>
                <SlideUp
                  component={
                    <Subtitle>Director &mdash; Hayao Miyazaki</Subtitle>
                  }
                />
                <SlideUp
                  component={
                    <Subtitle>Producer &mdash; Toshio Suzuki</Subtitle>
                  }
                />
              </>
            }
            peopleArr={film.people}
            speciesArr={film.species}
            body={film.description}
          />
        ))}
      {/* {isFetched ? (
        data &&
        data.map((film: Film) => (
          <motion.div
            key={film.id}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Card data={film} />
          </motion.div>
        ))
      ) : (
        <>
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
        </>
      )} */}
    </Items>
  );
};

export default Films;
