import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormWithLocalStorage = () => {
  // ✅ Load from localStorage initially (best practice)
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("users");
    return storedData ? JSON.parse(storedData) : [];
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Add data
  const onSubmt = (data) => {
    setFormData((formData) => [...formData, data]);
    reset();
  };

  // ✅ Delete using index (fix bug)
  const handleOnDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  // ✅ Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <div className="row py-5">
        <h6>
          04 : create a User Form Validation & save data into localStorage
        </h6>

        {/* FORM */}
        <div className="col-lg-4 pt-5 border pb-4">
          <div className="border p-3">
            <form onSubmit={handleSubmit(onSubmt)}>
              <input
                type="text"
                placeholder="enter name here"
                className={`form-control mb-3 ${
                  errors.name ? "border-2 border-danger" : ""
                }`}
                {...register("name", {
                  required: "enter your valid Name",
                })}
              />
              {errors.name && (
                <span className="text-danger">
                  {errors.name.message}
                </span>
              )}

              <input
                type="email"
                placeholder="enter Email here"
                className={`form-control mb-3 ${
                  errors.email ? "border-2 border-danger" : ""
                }`}
                {...register("email", {
                  required: "enter your valid Email",
                })}
              />
              {errors.email && (
                <span className="text-danger">
                  {errors.email.message}
                </span>
              )}

              {/* ✅ Fixed phone validation */}
              <input
                type="text"
                placeholder="enter Number here"
                className={`form-control mb-3 ${
                  errors.phone ? "border-2 border-danger" : ""
                }`}
                {...register("phone", {
                  required: "enter your valid Number",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter valid 10 digit number",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-danger">
                  {errors.phone.message}
                </span>
              )}

              <input
                type="password"
                className={`form-control mb-3 ${
                  errors.password ? "border-2 border-danger" : ""
                }`}
                placeholder="enter password here"
                {...register("password", {
                  required: "enter your password",
                  minLength: {
                    value: 6,
                    message: "enter min 6 chars",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger">
                  {errors.password.message}
                </span>
              )}

              <button className="btn btn-outline-success">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* TABLE */}
        <div className="col-lg-8">
          <div className="border p-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {formData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Data Found
                    </td>
                  </tr>
                ) : (
                  formData.map((f, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{f.name}</td>
                      <td>{f.email}</td>
                      <td>{f.phone}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleOnDelete(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormWithLocalStorage;