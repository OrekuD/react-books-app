import React from "react";
import "./styles.scss";
import { r } from "../../config";
import { Link } from "react-router-dom";

interface Props {
  book: {};
}

const Card = ({ book }: Props) => {
  const {
    volumeInfo,
    id,
    searchInfo: { textSnippet },
  } = r;

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
          {authors.map((author) => {
            if (authors.length > 1) {
              return <p key={author}>{author},</p>;
            } else {
              return <p key={author}>{author}</p>;
            }
          })}
        </span>
        <Link
          to={{
            pathname: `/book/${id}`,
            state: { textSnippet },
          }}
          className="button"
        >
          <p> View book details </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
