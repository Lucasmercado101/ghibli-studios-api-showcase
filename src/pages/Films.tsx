import { motion, AnimatePresence } from "framer-motion";
import FilmCard from "./FilmCard/FilmCard";
import { useQuery } from "react-query";
import { getFilms } from "../Api";
import styled from "styled-components";
import SlideUp from "../components/Card/SlideUp";
import Subtitle from "../components/Card/Subtitle";
import FilmSkeletonLoader from "./FilmCard/CardSkeleton";
import Card from "../components/Card/Card";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const variants = {
  hidden: { y: "50%", opacity: 0, display: "none" },
  visible: { y: 0, opacity: 1, display: "block", transition: { duration: 0.5 } }
};

const containerDiv = ({ className, children }: any) => {
  return (
    <motion.ul
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(45ch, 1fr));
  align-items: flex-start;
  padding: 50px;
`;

const Films: React.FC = () => {
  const { data, isError } = useQuery("films", getFilms);

  if (isError)
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Card title="Error" body="Could not fetch films!"></Card>
      </div>
    );

  return (
    <AnimatePresence>
      {data ? (
        <Grid as={containerDiv}>
          {data.map((film) => (
            <motion.li variants={variants}>
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
            </motion.li>
          ))}
        </Grid>
      ) : (
        <Grid>
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
          <FilmSkeletonLoader />
        </Grid>
      )}
    </AnimatePresence>
  );
};

export default Films;
