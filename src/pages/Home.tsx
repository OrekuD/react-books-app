import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header, Card } from "../components";
import { Book } from "../types";
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ease = [0.6, -0.05, 0.01, 0.99];
const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease,
      duration: 0.6,
    },
  },
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearchComplete, setIsSearchComplete] = useState<boolean>(false);

  const setSearch = (value: string) => {
    setSearchTerm(value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.items);
      setIsSearchComplete(true);
    } catch (error) {
      alert("Please check your internet connection and try again");
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header
        fetchData={fetchData}
        searchTerm={searchTerm}
        setSearch={setSearch}
        isSearchComplete={isSearchComplete}
      />
      {isSearchComplete ? (
        <motion.div variants={containerVariants} className="books">
          {searchResults.map((book) => (
            <motion.div key={book.id} variants={variants}>
              <Card book={book} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Home;
