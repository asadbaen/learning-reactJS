import React, { useState } from "react";

const ReactUseState = () => {
  //   let name = "Maria";
  const [name, setName] = useState("Maria");
  const [age, setAge] = useState(20);

  const handleClick = () => {
    // name = "Lovel";
    // console.log(name);
    setName("Lovel");
    setAge(25);
  };
  return (
    <div className="home">
      <h2>React Use State</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click here ..</button>
    </div>
  );
};

export default ReactUseState;
