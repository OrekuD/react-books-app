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
          <p> Back to home </p>
        </Link>
        <p className="title"> {title} </p>
        <span className="authors">
          <p> By </p>
          {authors.map((author) => (
            <p className="author"> {author} </p>
          ))}
        </span>
        <p className="snippet">
          {" "}
          Ullamco voluptate exercitation exercitation nisi incididunt cupidatat
          occaecat sint irure consectetur quis enim voluptate.{" "}
        </p>
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <p>View book preview</p>
        </a>
        <p className="published-details">
          {publishedDate}, {publisher}
        </p>
        <p className="has-ebook">{isEbook}</p>
        <p className="badge">{saleability}</p>
        <p className="badge">{maturityRating}</p>
      </div>
    </motion.div>
  );
};

export default Book;
