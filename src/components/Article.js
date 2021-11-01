import React from "react";

const Article = ({ title, author, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="author">{author}</p>
      <br />
      <p>{text}</p>
      <hr />
    </div>
  );
};

export default Article;
