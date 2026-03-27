import { useState } from "react";

const SimpleUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // const { value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="row pb-5 ">
        <h6 className="pt-3">
          01 : create a form & console form data (do not use any library)
        </h6>

        <div className="col-lg-6 pt-5 border pb-4">
          <form action="" onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              placeholder="enter name here"
              className="form-control mb-3"
            />
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              placeholder="enter Email here"
              className="form-control mb-3"
            />
            <input
              type="number"
              name="phone"
              onChange={handleOnChange}
              placeholder="enter Number here"
              className="form-control mb-3"
            />
            <button className="btn btn-outline-success" type="submit">
              Submit & console data
            </button>
          </form>
          {formData && (
            <p>
              {formData.name}|| {formData.email}|| {formData.phone}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SimpleUserForm;
