import React from "react";
// import logo from './logo.svg';
// import "./App.css";
import Home from "./pages/Home";
// import PartOne from "./Tutorials/part-1";
import Navbar from "./Tutorials/part-2/components/Navbar";
// import Home from "./Tutorials/part-2/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
