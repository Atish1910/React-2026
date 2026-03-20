import React from "react";
import Parent from "./one/Parent";
import BindArray from "./BindArray";

const UseStateAllQuestions = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h4>all Question on useState</h4>
            <Parent></Parent>
          </div>
          <BindArray></BindArray>
        </div>
      </section>
    </>
  );
};

export default UseStateAllQuestions;
