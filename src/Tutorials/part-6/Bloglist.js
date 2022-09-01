import React from "react";

const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="title">{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete ID</button>
        </div>
      ))}
    </>
  );
};

export default Bloglist;
