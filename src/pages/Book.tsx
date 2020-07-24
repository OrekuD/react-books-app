import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    },
  },
};

interface Props {
  location: any;
}

const BookPage = ({ location }: Props) => {
  const [bookDetails, setBookDetails] = useState<any>({});
  const [isLoading, setIsloading] = useState<boolean>(true);
  useEffect(() => {
    fetchBookData();
  }, [location]);

  const fetchBookData = async () => {
    const id = location.pathname.slice(6, location.pathname.length);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    const data = await response.json();
    console.log(data);
    setBookDetails(data);
    setIsloading(false);
  };

  if (isLoading) {
    return (
      <div>
        {" "}
        <h1> isLoading</h1>{" "}
      </div>
    );
  }

  const { volumeInfo, saleInfo } = bookDetails;
  const {
    title,
    authors,
    publishedDate,
    publisher,
    maturityRating,
    imageLinks: { thumbnail },
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
        <img src={thumbnail} alt="thumbnail" className="image" />
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
          {authors.map((author: string, index: number) => (
            <motion.p key={author} variants={contentVariants}>
              {author}
              {index === authors.length - 1 ? (
                ""
              ) : authors.length > 1 ? (
                <span>,</span>
              ) : (
                ""
              )}
            </motion.p>
          ))}
        </span>
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
