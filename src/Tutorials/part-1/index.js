// Dynamic values in templates
import React from "react";

function PartOne() {
  const title = "Welcome to the Tutorial Coding Ninja Dojo";
  const likes = 50;
  //   const person = { name: "Berliana Lovel", age: 25 };
  return (
    <>
      <h1>{title}</h1>
      <p>{likes}</p>
      <p>{"Berliana"}</p>
      <p>{25}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>
    </>
  );
}

export default PartOne;
