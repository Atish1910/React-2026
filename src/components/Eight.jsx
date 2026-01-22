import React from "react";
import { useForm } from "react-hook-form";

function Eight() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "" },
  });

  function onLogin(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h4>Create form & add validation </h4>
            <div className="col-lg-6">
              <form action="" onClick={handleSubmit(onLogin)}>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "border border-danger" : ""} `}
                  {...register("name", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Enter at least 3 Letters",
                    },
                  })}
                ></input>
                {errors.name && (
                  <label className="mb-3 text-danger">
                    {errors.name.message}
                  </label>
                )}

                <input
                  type="email"
                  className={`form-control ${errors.email ? "border border-danger" : ""}`}
                  {...register("email", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Enter at least 3 Letters",
                    },
                  })}
                ></input>
                {errors.email && (
                  <label className="mb-3 text-danger">
                    {errors.email.message}
                  </label>
                )}

                <input
                  type="number"
                  className={`form-control ${errors.phone ? "border border-danger" : ""}`}
                  {...register("phone", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Enter at least 3 Letters",
                    },
                  })}
                ></input>
                {errors.phone && (
                  <label className="mb-3 text-danger">
                    {errors.phone.message}
                  </label>
                )}
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Eight;
