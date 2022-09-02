import React from "react";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
    <div className="not-fount">
      <h2>Sorry</h2>
      <p>That Page cannot be fount</p>
      <Link to="/">Back to the homepage ... </Link>
    </div>
  );
};

export default NotFount;
