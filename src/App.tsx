import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import Card from "./components/Card/Card";

/*
#222831
#30475e
#f2a365
#ececec
*/

axios.defaults.baseURL = "https://ghibliapi.herokuapp.com";
// "https://cors-anywhere.herokuapp.com/https://ghibliapi.herokuapp.com";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const variants = {
  hidden: { y: 0, opacity: 0, display: "none" },
  // hidden: { y: "50%", opacity: 0, display: "none" },
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

function App() {
  const { data, isFetched } = useQuery("films", () =>
    axios.get("/films").then((resp) => resp.data)
  );

  if (!data) return <></>;

  return (
    <div className="App">
      <Items>
        {isFetched &&
          data.map((film: Film) => (
            <motion.div
              key={film.id}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <Card data={film} />
            </motion.div>
          ))}
      </Items>
    </div>
  );
}

export default App;
