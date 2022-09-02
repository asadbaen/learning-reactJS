import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../part-7/useFetch";
import ReadMore from "./ReadMore";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs: data, error, isPending } = UseFetch(
    "http://localhost:8000/blogs/" + id
  );
  //   const animals =
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti consectetur provident hic ex! Voluptatum deserunt eius illo minima ut repellendus consequatur, animi tempore dolorum architecto laboriosam facere deleniti corporis.";
  //   console.log(animals.toString().slice(0, 5));
  return (
    <div className="blog-details">
      <h1>Blogs Detail - {id}</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <h5>{data.author}</h5>
          <ReadMore>{data.body}</ReadMore>
          {/* <p>{data.body}</p> */}
        </article>
      )}
      {/* {animals.toString().slice(0, 100)} */}
    </div>
  );
};

export default BlogDetails;
