import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormReactHookFormCrudThree = () => {
  const [formData, setFormData] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmt = (data) => {
    setFormData((formData) => [...formData, data])
    reset();
  };

  const handleOnDelete = (dataId) => {
    const updatedCart = formData.filter((d) => {
        return d.name != dataId;
    });
    setFormData(updatedCart)
  }
  return (
    <>
      <div className="row py-5">
        <h6>03 : create a User Form (React Hook Form + Validation) & show data on UI in table Format & Crud Operation</h6>

        <div className="col-lg-4 pt-5 border pb-4">
          <div className="border p-3 border">
          <form action="" onSubmit={handleSubmit(onSubmt)}>
            <input
              type="text"
              placeholder="enter name here"
              className={`form-control mb-3 ${errors.name ? "border-2 border-danger " : ""}`}
              {...register("name", { required: "enter your valid Name" })}
            />
            {errors.name && (
              <span className="text-danger">{errors.name.message}</span>
            )}
            <input
              type="email"
              placeholder="enter Email here"
              className={`form-control mb-3 ${errors.email ? "border-2 border-danger " : ""}`}
              {...register("email", { required: "enter your valid Email" })}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
            <input
              type="number"
              placeholder="enter Number here"
              className={`form-control mb-3 ${errors.phone ? "border-2 border-danger " : ""}`}
              {...register("phone", {
                required: "enter your valid NUmber",
                maxLength: { value: 10, message: "you can type only 10 chars" },
              })}
            />
            {errors.phone && (
              <span className="text-danger">{errors.phone.message}</span>
            )}
            <input
              type="password"
              className={`form-control mb-3 ${errors.password ? "border-2 border-danger " : ""}`}
              placeholder="enter password here"
              {...register("password", {
                required: "enter your password",
                minLength: { value: 6, message: "enter min 6 chars" },
              })}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
            <button className="btn btn-outline-success">
              Submit & console data
            </button>
          </form>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="border p-3 border">
          <table className="table-bordered table">
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            { formData.length <= 0 ? <p>there is no data</p> :
              formData.map((f, i) => (
                <tr className="my-3">
                  <td>{i+1}</td>
                  <td>{f.name}</td>
                  <td>{f.email}</td>
                  <td>{f.phone}</td>
                  <td><button className="btn btn-danger my-2" onClick={() => handleOnDelete(f.name)}>Delete</button></td>
                </tr>
              ))
            }
          </table>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default FormReactHookFormCrudThree;
