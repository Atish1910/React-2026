import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Nine = () => {
  const [item, setItem] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "" },
  });

  function onSubmit(data) {
    console.log(data);
    setItem([...item, data.name]);
    reset();
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>
                Create a form when suer click on submit data should be dispay on
                UI
              </h4>
            </div>
            <div className="col-lg-6 py-3 border rounded-3">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className={`form-control mb-3 ${errors.name ? "border border-danger" : ""}`}
                  placeholder="enter name Here...."
                  {...register("name", {
                    required: true,
                    minLength: { value: 5, message: "Enter Full Name" },
                  })}
                />
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </form>
              <div className="">
                <ul>
                  {item.map((i) => {
                    <li>{i}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nine;
