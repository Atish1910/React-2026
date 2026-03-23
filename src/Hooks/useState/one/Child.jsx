import React from "react";

const Child = ({ data, handleOnClick }) => {
  const handleOnClickofParent = () => {
    handleOnClick("ishu atish kamble");
  };
  return (
    <>
      <div className="border py-3 text-center">
        <h6>i am child</h6>
        My Name is : <b> {data}</b> <br />
        <button
          className="btn btn-outline-success"
          onClick={handleOnClickofParent}
        >
          change data of parent
        </button>
      </div>
    </>
  );
};

export default Child;
