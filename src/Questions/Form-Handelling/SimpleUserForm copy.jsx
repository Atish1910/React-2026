const SimpleUserForm = () => {
  return (
    <>
      <div className="row pb-5">
        <h6>create a form & console </h6>

        <div className="col-lg-6 pt-5 border pb-4">
          <form action="">
            <input
              type="text"
              placeholder="enter name here"
              className="form-control mb-3"
            />
            <input
              type="email"
              placeholder="enter Email here"
              className="form-control mb-3"
            />
            <input
              type="number"
              placeholder="enter Number here"
              className="form-control mb-3"
            />
            <button className="btn btn-outline-success">
              Submit & console data
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SimpleUserForm;
