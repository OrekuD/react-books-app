import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Book = () => {
  useEffect(() => {}, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      className="book-page"
    >
      <div className="image-container">
        <div className="image"></div>
      </div>
      <div className="content">
        <p> Back to home </p>
        <p></p>
      </div>
    </motion.div>
  );
};

export default Book;
