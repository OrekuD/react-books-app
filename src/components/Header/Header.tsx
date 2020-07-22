import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <motion.div className="header">
      <Link to="/">
        <p> Home </p>
      </Link>
      <Link to="/book">
        <p> Book </p>
      </Link>
    </motion.div>
  );
};

export default Header;
