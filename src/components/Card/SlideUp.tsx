import React from "react";
import { motion } from "framer-motion";
import variants from "./variants";

type Props = { component?: React.ReactNode; className?: string };

const SlideUp: React.FC<Props> = ({ children, component, className }) => {
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ marginBottom: 5 }} variants={variants}>
        {component || children}
      </motion.div>
    </div>
  );
};

export default SlideUp;
