import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormReactHookFormOne = () => {
  const [formData, setFormData] = useState();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmt = (data) => {
    setFormData(data);
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="row pb-5">
        <h6>create a User Form (React Hook Form + Validation) </h6>
        <small>npm i react-hook-form</small>

        <div className="col-lg-6 pt-5 border pb-4">
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
      </div>{" "}
    </>
  );
};

export default FormReactHookFormOne;
