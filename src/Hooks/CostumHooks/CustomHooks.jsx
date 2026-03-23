import React from "react";
import WindowWidthComponent from "./one/WindowWidthComponent";
import FetchApiCustomHook from "./two/FetchApiCustomHook";

const CustomHooks = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row parent">
            <h4>23 : here are all Custome hooks Problems</h4>
          </div>
          <WindowWidthComponent></WindowWidthComponent>
          <FetchApiCustomHook></FetchApiCustomHook>
        </div>
      </section>
    </>
  );
};

export default CustomHooks;
