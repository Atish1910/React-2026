import React from "react";
import ThemeToggler from "./ThemeToggler.jsx/ThemeToggler";
import { ThemeProvider } from "./ThemeToggler.jsx/ThemeContext";

const ParentContextPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h4>here are all questions on COntext API</h4>
          </div>
          <ThemeProvider>
            <ThemeToggler></ThemeToggler>
          </ThemeProvider>
        </div>
      </section>
    </>
  );
};

export default ParentContextPage;
