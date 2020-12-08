import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "../components/Card/Card";
import { useQuery } from "react-query";
import { getFilms } from "../Api";
import ContentLoader from "react-content-loader";

const FilmSkeletonLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={386}
    viewBox="0 0 430 386"
    backgroundColor="#222831"
    foregroundColor="#ececec"
  >
    <rect x="0" y="0" rx="8" ry="8" width="430" height="10" />
    <rect x="0" y="376" rx="8" ry="8" width="430" height="10" />
    <rect x="0" y="0" rx="8" ry="8" width="10" height="386" />
    <rect x="420" y="0" rx="8" ry="8" width="10" height="386" />
    <rect x="30" y="30" rx="8" ry="8" width="218" height="31" />
    <rect x="255" y="38" rx="8" ry="8" width="76" height="22" />
    <rect x="30" y="326" rx="8" ry="8" width="376" height="30" />
    <rect x="30" y="280" rx="8" ry="8" width="376" height="30" />
    <rect x="30" y="70" rx="8" ry="8" width="140" height="15" />
    <rect x="30" y="115" rx="16" ry="16" width="306" height="29" />
    <rect x="30" y="155" rx="16" ry="16" width="376" height="29" />
    <rect x="30" y="195" rx="16" ry="16" width="226" height="29" />
  </ContentLoader>
);

const container = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const variants = {
  hidden: { y: "50%", opacity: 0, display: "none" },
  visible: { y: 0, opacity: 1, display: "block" },
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
      {isFetched ? (
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
      )}
    </Items>
  );
};

export default Films;
