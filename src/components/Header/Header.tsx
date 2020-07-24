import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles.scss";

const variants = {
  moveUp: {
    height: "40vh",
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

interface Props {
  fetchData: () => void;
  searchTerm: string;
  setSearch: (value: string) => void;
  isSearchComplete: boolean;
}

const Header = ({
  fetchData,
  searchTerm,
  setSearch,
  isSearchComplete,
}: Props) => {
  const animation = useAnimation();

  const search = () => {
    fetchData();
  };

  useEffect(() => {
    if (isSearchComplete) {
      animation.start("moveUp");
    }
  }, [isSearchComplete]);

  return (
    <motion.div variants={variants} animate={animation} className="header">
      <p className="main-title">Search for books!</p>
      <input
        type="text"
        className="input"
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
      />
      <button onClick={search}>Search</button>
    </motion.div>
  );
};

export default Header;
