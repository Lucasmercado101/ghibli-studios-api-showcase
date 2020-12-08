import { motion } from "framer-motion";
import styled from "styled-components";

const fadeText: React.FC<{ className?: any }> = ({ children, className }) => {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      animate="visible"
      exit="hide"
      variants={variants}
    >
      {children}
    </motion.ul>
  );
};

const variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
  hide: { height: 0, opacity: 0, transition: { duration: 0.4 } },
};

const DropdownContent = styled(fadeText)`
  color: ${({ theme }) => theme.primary};
  line-height: 1.5;
  font-size: 1.2rem;
  overflow: hidden;
  margin-top: 5px;
  & li::before {
    content: "— ";
    color: ${({ theme }) => theme.accentDark};
  }
`;

export default DropdownContent;
