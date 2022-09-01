import React, { useEffect, useState } from "react";
import Bloglist from "./Bloglist";

const ReactUseEffect = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("running !!!");
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("cloud not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          console.log(err.message);
          setError(err.message);
        });
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    // console.log(blogs);
    // const newsBlogs = blogs.filter((blog) => blog.id !== id);
    const deleteBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(deleteBlogs);
  };
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title="ReactUseEffect"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
export default ReactUseEffect;
