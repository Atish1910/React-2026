import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Atish viayak kamble");

  const handleOnClick = (newData) => {
    setData(newData);
  };

  return (
    <>
      <div className="row">
        <h4>
          1. How to send the data from parent component to child component in
          react ?
        </h4>
        {data}
        <Child data={data} handleOnClick={handleOnClick}></Child>
      </div>
    </>
  );
};

export default Parent;
