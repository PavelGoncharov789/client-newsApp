import React from "react";

export const News = ({ element }) => {

  return (
    <div>
      <h1>{element.title}</h1>
      {console.log(element.title)}
      {/* <img></img> */}
      <p>{element.text}</p>
      <p>{element.author}</p>
      <p>{element.tags}</p>
    </div>
  );
};
