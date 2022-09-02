import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const togleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="text">
      {isReadMore ? text.toString().slice(0, 100) : text}
      <span onClick={togleReadMore} className="read-or-hide">
        {isReadMore ? " ...read more" : " show less"}
      </span>
    </div>
  );
};
export default ReadMore;
