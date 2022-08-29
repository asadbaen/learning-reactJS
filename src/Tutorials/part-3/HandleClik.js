import React from "react";

const ReactHandleClick = () => {
  const handleClick = (e) => {
    console.log("hello, Tutorial, Coding, Dojo", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("halo " + name, e.target);
  };
  return (
    <div className="home">
      <h2>HandleClick</h2>
      <button onClick={handleClick}>Click Here ..</button>
      <button
        onClick={(e) => {
          handleClickAgain("Lovel", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default ReactHandleClick;
