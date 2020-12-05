import React from "react";
import { motion } from "framer-motion";
import variants from "./variants";

type Props = { component?: React.ReactNode };

const SlideUp: React.FC<Props> = ({ children, component }) => {
  if (!children && component)
    // only one component
    return (
      <div style={{ overflow: "hidden" }}>
        <motion.div style={{ marginBottom: 5 }} variants={variants}>
          {component}
        </motion.div>
      </div>
    );

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div style={{ marginBottom: 5 }} variants={variants}>
        {children}
      </motion.div>
    </div>
  );
};

export default SlideUp;
