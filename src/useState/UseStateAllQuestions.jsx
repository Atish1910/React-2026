import React from "react";
import Parent from "./one/Parent";
import BindArray from "./BindArray";
import DisplayInput from "./DisplayInput";
import ContryStateDropDown from "./ContryStateDropDown";
import AddNewDataInArray from "./AddNewDataInArray";
import Counter from "./Counter";
import ControlledInput from "./ConrolledUncontrolled/ControlledInput";

const UseStateAllQuestions = () => {
  return (
    <>
      <section>
          <ControlledInput></ControlledInput>
        <div className="container">
          <div className="row">
            <h4>all Question on useState</h4>
            <Parent></Parent>
          </div>
          <Counter></Counter>
          <BindArray></BindArray>
          <DisplayInput></DisplayInput>
          <ContryStateDropDown></ContryStateDropDown>
          <AddNewDataInArray></AddNewDataInArray>
        </div>
      </section>
    </>
  );
};

export default UseStateAllQuestions;
