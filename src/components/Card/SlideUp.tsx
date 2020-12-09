import React from "react";
import { motion } from "framer-motion";
import variants from "./variants";

type Props = {
  component?: React.ReactNode;
  className?: string;
  style?: object;
};

const SlideUp: React.FC<Props> = ({
  children,
  component,
  className,
  style
}) => {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* This parent div only exists for hiding the item moving up,
       making it look like it appears out of nowhere, not
       for classes or styles */}
      <motion.div variants={variants} className={className} style={style}>
        {component || children}
      </motion.div>
    </div>
  );
};

export default SlideUp;
