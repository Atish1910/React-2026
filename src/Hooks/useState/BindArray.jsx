import React from "react";

const BindArray = () => {
  const users = ["atish", "abrar", "pranali", "shubham", "ajit", "shubham"];
  const employee = [
    { id: 1, dept: "techTeam", name: "Abrar", designation: "Manager" },
    {
      id: 2,
      dept: "techTeam",
      name: "Pranali",
      designation: "Assistent Manager",
    },
    { id: 3, dept: "techTeam", name: "atish", designation: "Web Developer" },
    {
      id: 4,
      dept: "techTeam",
      name: "Shubhamatish",
      designation: "Web Developer",
    },
    { id: 5, dept: "ppc", name: "Ajit Sir", designation: "Sr Manager" },
    { id: 6, dept: "ppc", name: "Ankur", designation: "Account manager" },
    { id: 7, dept: "ppc", name: "Pratik", designation: "Sr Execuitive" },
    { id: 8, dept: "ppc", name: "Vaibhav", designation: "Ppc Execuitive" },

    { id: 9, dept: "design", name: "Akash", designation: "Desinger" },
    { id: 10, dept: "design", name: "Ajit Sir", designation: "Sr Designer" },
  ];
  return (
    <>
      <div className="row">
        <h5 className="">
          3.How to bind array/array of objects to dropdown in react ?
        </h5>
        <div className="col-lg-6 border">
          <h6>display all employees list</h6>
          <ul>
            {users.map((emp) => (
              <li key={emp}>{emp}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          <table className="table-bordered border g-3">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>designation</th>
              <th>Dept</th>
            </tr>
            {employee.map((emp) => {
              if (emp.dept.toLowerCase() == "ppc") {
                return (
                  <tr>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.dept}</td>
                  </tr>
                );
              }
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default BindArray;
