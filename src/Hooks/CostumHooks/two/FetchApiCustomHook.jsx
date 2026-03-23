import React, { useEffect, useState } from "react";

const ApiHook = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await res.json();
        setUsers(result);
      } catch (error) {
        console.log("error to fetch  data", error);
      }
    };

    fetchData();
  }, []);

  return { users };
};

const FetchApiCustomHook = () => {
  const { users } = ApiHook();

  return (
    <>
      <div className="row">
        <h4>Create a custom Hook to fetch data from api</h4>
        <div className="col-lg-6">
          <ul>
            {users.map((u) => (
              <li>{u.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FetchApiCustomHook;
