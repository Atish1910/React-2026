import React, { useRef, useState } from "react";

const Display = () => {
  const inputRef = useRef(null);
  const maxLength = 100;

  const [remaining, setRemaining] = useState(maxLength);

  const handleRemainingData = () => {
    const currentData = inputRef.current.value.length;
    setRemaining(remaining - currentData);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <textarea
              name=""
              id=""
              ref={inputRef}
              onChange={handleRemainingData}
            ></textarea>
            <label htmlFor="" className="text-danger">
              {remaining}
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Display;
