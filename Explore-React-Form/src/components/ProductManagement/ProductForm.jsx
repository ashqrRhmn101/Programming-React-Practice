import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);

    if (name.length === 0) {
      setError("Please provide a product Name");
      return;
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct)
    handleAddProduct(newProduct);
  };

  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" /> <br />
        <input type="text" name="price" placeholder="Price" /> <br />
        <input type="text" name="quantity" placeholder="quantity" /> <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ProductForm;
