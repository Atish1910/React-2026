import React, { useEffect, useState, useMemo } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

const DataTable = () => {
  const [data, setData] = useState([]); // source data
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  // Fetch Data
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // Derived Data (filter + sort)
  const processedData = useMemo(() => {
    let filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortKey) {
      filtered.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, search, sortKey, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(processedData.length / rowsPerPage);

  const paginatedData = processedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Sorting handler
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mt-4">

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name"
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                style={{ cursor: "pointer" }}
              >
                {col.label}
                {sortKey === col.key &&
                  (sortOrder === "asc" ? " 🔼" : " 🔽")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}> {/* ✅ stable key */}
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default DataTable;