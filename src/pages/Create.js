import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();
  const handleTitle = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    console.log(e.target.value);
  };
  const handleAuthor = (e) => {
    const newAuthor = e.target.value;
    setAuthor(newAuthor);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("hey new blogs");
      setIsPending(false);
      history("/");
    });
  };
  return (
    <div className="create">
      <h2>Create a New Blogs</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title</label>
        <input type="text" value={title} onChange={handleTitle} required />
        <label htmlFor=""> Blog Body</label>
        <textarea
          name=""
          value={body}
          onChange={(e) => setBody(e.target.value)}
          id=""
          cols="30"
          rows="10"
          required
        ></textarea>
        <label htmlFor="">Author</label>
        <select value={author} onChange={handleAuthor}>
          <option>--Select Author --</option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Create New Blog</button>}
        {isPending && <button disabled>Create Pending ..</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
