import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const UseFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  // const { id } = useParams();
  // const history = useNavigate();

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("cloud not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
          }
        })
        .finally(() => setIsPending(false));
    }, 1000);
    // return () => console.log("Cleanup!");
    return () => abortCont.abort();
  }, [url]);

  const handleDelete = (id) => {
    // console.log(blogs);
    // const newsBlogs = blogs.filter((blog) => blog.id !== id);
    const deleteBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(deleteBlogs);
  };
  // handle delete detail by ID

  return { blogs, isPending, error, handleDelete };
};

export default UseFetch;
