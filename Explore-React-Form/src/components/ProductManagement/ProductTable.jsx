import React from "react";
import "./Product.css"

const ProductTable = ({ products }) => {
  // console.log(products)
  return (
    <div style={{ border: "2px solid", padding: "10px" }}>
      <h2>Products : {products.length}</h2>
      <table style={{ border: "2px solid", padding: "7px" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
