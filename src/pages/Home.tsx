import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <h1> Home </h1>
    </motion.div>
  );
};

export default Home;
