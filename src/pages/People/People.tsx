import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { getPeople } from "../../Api";
import styled from "styled-components";
import PersonCard from "./PersonCard/PersonCard";
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

const People: React.FC = () => {
  const { data, isError } = useQuery("people", getPeople);

  if (isError)
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <Card title="Error" body="Could not fetch people!"></Card>
      </div>
    );

  return (
    <AnimatePresence>
      {data ? (
        <Grid as={containerDiv}>
          {data.map((person) => (
            <motion.li key={person.id} variants={variants}>
              <PersonCard data={person} />
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

export default People;
