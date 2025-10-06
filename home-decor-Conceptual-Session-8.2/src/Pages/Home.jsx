import React from "react";
import useProducts from "../Hook/useProducts";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

const Home = () => {
  const { products, loading, error } = useProducts();
  // console.log(products)
  const featuredProducts = products.slice(0, 6);
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1>All Products</h1>
        <Link to="/products">
          <button className="btn">See All Products</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/products">
          <button className="btn mt-5">See All Products ...</button>
        </Link>
    </div>
  );
};

export default Home;
