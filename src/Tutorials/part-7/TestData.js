import React from "react";
import DataList from "./DataList";
import UseFetch from "./useFetch";

const TestData = () => {
  const { blogs, isPending, error, handleDelete } = UseFetch(
    "http://localhost:8000/blogs"
  );
  // const history = useNavigate();

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blogs && (
        <DataList
          blogs={blogs}
          title="ReactUseEffect"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
export default TestData;
