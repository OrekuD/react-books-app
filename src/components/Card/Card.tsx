import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Book } from "../../types";

interface Props {
  book: Book;
}

const Card = ({ book }: Props) => {
  const { volumeInfo, id } = book;

  const { title, authors, imageLinks } = volumeInfo;

  return (
    <div className="card">
      <div className="image-container">
        <img src={imageLinks.thumbnail} alt="thumbnail" className="image" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <span className="authors">
          <p> By </p>
          {authors &&
            authors.map((author: string) => {
              if (authors.length > 1) {
                return <p key={author}>{author},</p>;
              } else {
                return <p key={author}>{author}</p>;
              }
            })}
        </span>
        <Link to={`/book/${id}`} className="button">
          <p> View book details </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
