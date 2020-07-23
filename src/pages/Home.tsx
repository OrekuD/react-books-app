import React from "react";
import { motion } from "framer-motion";
import { Header, Card } from "../components";
import { books } from "../config";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <Header />
      <div className="books">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
