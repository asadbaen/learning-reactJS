import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

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
  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log("running !!!");
  //       fetch(url)
  //         .then((res) => {
  //           console.log(res);
  //           if (!res.ok) {
  //             throw Error("cloud not fetch the data for that resource");
  //           }
  //           return res.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //           setBlogs(data);
  //           setIsPending(false);
  //           setError(null);
  //         })
  //         .catch((err) => {
  //           //   setIsPending(false);
  //           console.log(err.message);
  //           setError(err.message);
  //         })
  //         .finally(() => setIsPending(false));
  //     }, 1000);
  //   }, [url]);
  const handleDelete = (id) => {
    // console.log(blogs);
    // const newsBlogs = blogs.filter((blog) => blog.id !== id);
    const deleteBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(deleteBlogs);
  };
  return { blogs, isPending, error, handleDelete };
};

export default UseFetch;
