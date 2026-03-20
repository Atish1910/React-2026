import React, { lazy, Suspense } from "react";
import MyComponent from "./MyComponent";

const PerformenceOptimization = () => {
  const LazyLoadMyComp = lazy(() => import("./MyComponent"));
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h5>i am parent of lazy load component</h5>
          </div>
          <Suspense fallback={<p>please wait component is loading</p>}>
            <LazyLoadMyComp></LazyLoadMyComp>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default PerformenceOptimization;
