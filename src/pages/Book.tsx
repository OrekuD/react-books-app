import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { re } from "../config";
import { Link } from "react-router-dom";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.6,
    },
  },
};

const ease = [0.6, -0.05, 0.01, 0.99];

const contentVariants = {
  initial: {
    opacity: 0,
    y: 60,
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

const Book = () => {
  const [bookDetails, setBookDetails] = useState({});
  useEffect(() => {
    // fetchBookData();
  }, []);

  const fetchBookData = async () => {
    const id = "qo";
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    const data = await response.json();
    // console.log(data);
    setBookDetails(data);
  };

  const { volumeInfo, saleInfo, accessInfo } = re;
  const {
    title,
    authors,
    publishedDate,
    publisher,
    maturityRating,
    imageLinks: { large, extraLarge },
    previewLink,
  } = volumeInfo;
  const { saleability, isEbook } = saleInfo;

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
        <Link to="/" className="back-to-home">
          <motion.p variants={contentVariants}> Back to home </motion.p>
        </Link>
        <motion.p variants={contentVariants} className="title">
          {title}
        </motion.p>
        <span className="authors">
          <motion.p variants={contentVariants}> By </motion.p>
          {authors.map((author) => {
            if (authors.length > 1) {
              return <motion.p variants={contentVariants}>{author},</motion.p>;
            } else {
              return <motion.p variants={contentVariants}>{author}</motion.p>;
            }
          })}
        </span>
        <motion.p variants={contentVariants} className="snippet">
          Ullamco voluptate exercitation exercitation nisi incididunt cupidatat
          occaecat sint irure consectetur quis enim voluptate.
        </motion.p>
        <motion.p variants={contentVariants} className="published-details">
          {publishedDate}, {publisher}
        </motion.p>
        <div className="extra-details">
          <motion.p variants={contentVariants} className="badge">
            {saleability}
          </motion.p>
          <motion.p variants={contentVariants} className="badge">
            {maturityRating}
          </motion.p>
        </div>
        <motion.p variants={contentVariants} className="has-ebook">
          Has an ebook? {isEbook ? <span> Yes </span> : <span> No </span>}
        </motion.p>
        <motion.a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          variants={contentVariants}
        >
          <p>View book preview</p>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Book;
