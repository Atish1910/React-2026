import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const found = products.find((item) => item._id === id); // ✅ fix
        if (found) {
          setSelectedProduct(found); // ✅ fix
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[]);


  // ✅ handle loading
  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container py-5">
      <div className="card">
        <img src={selectedProduct.images[0]} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>{selectedProduct.productName}</h5>
          <p>Price: {selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
