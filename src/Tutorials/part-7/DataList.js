import React from "react";

const DataList = (props) => {
  const data = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  return (
    <div>
      <h1>{title}</h1>
      {data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="title">{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete ID</button>
        </div>
      ))}
    </div>
  );
};

export default DataList;
