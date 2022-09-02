import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
// import Searching from "./Searching";
// import ReadMore from "./ReadMore";

const DataList = (props) => {
  const data = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  // paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  // console.log(indexOfLastItem);
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // console.log(indexOfFirstItem);
  // item post
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // console.log(currentItems);

  // cange page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(paginate);

  return (
    <div>
      <h1>{title}</h1>

      {currentItems.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="title">
              {blog.title} - {blog.id}
            </h2>
            <h5>{blog.author}</h5>
            <p>{blog.body.toString().slice(0, 100)}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>Delete ID</button>
        </div>
      ))}

      <Pagination
        itemPerPage={itemsPerPage}
        totalItem={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default DataList;
