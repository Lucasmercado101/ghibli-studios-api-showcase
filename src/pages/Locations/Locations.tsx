import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getLocations } from "../../Api";
import styled from "styled-components";
import LocationCard from "./LocationCard/LocationCard";
import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/Card/CardSkeleton";

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

const Locations: React.FC = () => {
  const { data, isError } = useQuery("locations", getLocations);

  if (isError)
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Card title="Error" body="Could not fetch locations!"></Card>
      </div>
    );

  return (
    <AnimatePresence>
      {data ? (
        <Grid as={containerDiv}>
          {data.map((location) => (
            <motion.li key={location.id} variants={variants}>
              <LocationCard data={location} />
            </motion.li>
          ))}
        </Grid>
      ) : (
        <Grid>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Grid>
      )}
    </AnimatePresence>
  );
};

export default Locations;
