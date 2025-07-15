import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionDrawerContent = chakra(motion.div, {
  baseStyle: {
    bg: "white",
    borderLeft: "1px solid #E2E8F0",
    width: "250px",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1400,
    overflowY: "auto",
    boxShadow: "md",
    padding: "1rem"
  }
});

export default MotionDrawerContent;
