import React, { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const rowPerPage = 3;

  const totalPages = Math.ceil(data.length / rowPerPage);

  const paginatedData = data.slice(
    (currentIndex - 1) * rowPerPage,
    currentIndex * rowPerPage,
  );

  // ✅ Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mb-5">
      <div className="container mt-4">
        <div className="row">
          <h4>02 :fetch data from api & put in table & implement pagination</h4>
        </div>

        {/* Table */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((user) => (
              <tr key={user.id}>
                {" "}
                {/* ✅ stable key */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          {totalPages} / {currentIndex}
        </p>

        <div className="d-flex">
          <button
            className="btn btn-outline-danger"
            disabled={currentIndex == 1}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
          >
            -
          </button>
          <button
            className="btn btn-outline-success"
            disabled={currentIndex == totalPages}
            onClick={() => setCurrentIndex((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
