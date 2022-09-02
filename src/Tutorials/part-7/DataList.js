import React from "react";
import { Link } from "react-router-dom";
// import ReadMore from "./ReadMore";

const DataList = (props) => {
  const data = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  return (
    <div>
      <h1>{title}</h1>
      {data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="title">{blog.title}</h2>
            <h5>{blog.author}</h5>
            <p>{blog.body.toString().slice(0, 100)}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>Delete ID</button>
        </div>
      ))}
    </div>
  );
};

export default DataList;
