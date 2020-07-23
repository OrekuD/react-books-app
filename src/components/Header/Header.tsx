import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const Header = () => {
  return (
    <motion.div className="header">
      <p className="main-title">Books</p>
      <input type="text" className="input" />
    </motion.div>
  );
};

export default Header;
