import React, { useState, useEffect } from "react";
import Bloglist from "../Tutorials/part-5/Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum ...", author: "Jhon", id: 1 },
    {
      title: "Welcome to Party!",
      body: "lorem ipsum ...",
      author: "Maria",
      id: 2,
    },
    {
      title: "web dev top tips",
      body: "lorem ipsum ...",
      author: "Adelia",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Cintia");

  const handleDelete = (id) => {
    // console.log(blogs);
    const newsBlogs = blogs.filter((blog) => blog.id !== id);
    console.log(newsBlogs);
    setBlogs(newsBlogs);
  };

  useEffect(() => {
    console.log("useEffect run !");
    console.log(blogs);
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="Blog List" handleDelete={handleDelete} />
      <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Adelia")}
        title="Adelia is blogs"
      />
      <button onClick={() => setName("Adelia")}>cange Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
