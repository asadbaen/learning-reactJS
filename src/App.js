import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import PartOne from "./Tutorials/part-1";
import Navbar from "./Tutorials/part-2/components/Navbar";
import Home from "./Tutorials/part-2/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <PartOne /> */}
      </div>
    </div>
  );
}

export default App;
