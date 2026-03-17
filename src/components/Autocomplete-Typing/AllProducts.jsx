import React from "react";
import { useNavigate } from "react-router-dom";

const AllProducts = ({ p }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-lg-3 py-3">
        <div className="card">
          <img
            src={p.images[0]}
            className="card-img-top object-fit-contain"
            height={"150px"}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{p.productName}</h5>
            <p className="card-text">{p.price}</p>
            <button
              className="btn btn-outline-success"
              onClick={() => navigate(`/products/${p._id}`)}
            >
              view More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
