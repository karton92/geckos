import React from "react";

const Animal = ({ name, img, id, text }) => {
  return (
    <div className="article">
      <h3>{name}</h3>
      <img src={img} alt={id} />
      <p>{text}</p>
      <hr />
    </div>
  );
};

export default Animal;
