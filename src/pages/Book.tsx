import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { re } from "../config";
import { Link } from "react-router-dom";
import { Book } from "../types";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
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
      //   delay: 0.8,
    },
  },
};

interface Props {
  location: any;
}

const BookPage = ({ location }: Props) => {
  const [bookDetails, setBookDetails] = useState<Book>(re);
  // const [snippet, setSnippet] = useState<string>("");
  useEffect(() => {
    // fetchBookData();
    // setSnippet(location.state.textSnippet);
  }, [location]);

  const fetchBookData = async () => {
    // const id = location.pathname.slice(6, location.pathname.length)
    // const response = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes/${id}`
    // );

    // const data = await response.json();
    // console.log(data);
    // setBookDetails(data);

    setBookDetails(re);
  };

  const { volumeInfo, saleInfo, accessInfo } = bookDetails;
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
      exit="exit"
      className="book-page"
    >
      <div className="image-container">
        <img src={extraLarge} alt="thumbnail" className="image" />
      </div>
      <div className="content">
        <Link to="/" className="back-to-home">
          <motion.p variants={contentVariants}> View more books </motion.p>
        </Link>
        <motion.p variants={contentVariants} className="title">
          {title}
        </motion.p>
        <span className="authors">
          <motion.p variants={contentVariants}> By </motion.p>
          {authors.map((author) => {
            if (authors.length > 1) {
              return (
                <motion.p key={author} variants={contentVariants}>
                  {author},
                </motion.p>
              );
            } else {
              return (
                <motion.p key={author} variants={contentVariants}>
                  {author}
                </motion.p>
              );
            }
          })}
        </span>
        {/* <motion.div
          variants={contentVariants}
          className="snippet"
          dangerouslySetInnerHTML={{ __html: snippet }}
        >
          Ullamco voluptate exercitation exercitation nisi incididunt cupidatat
          occaecat sint irure consectetur quis enim voluptate. 
        </motion.div> */}
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

export default BookPage;
