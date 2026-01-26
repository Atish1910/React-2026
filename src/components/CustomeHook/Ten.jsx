import React from "react";
import useCustomHook from "./useCustomHook";

const Ten = () => {
  const { data } = useCustomHook(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <ul>
        {data.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Ten;
