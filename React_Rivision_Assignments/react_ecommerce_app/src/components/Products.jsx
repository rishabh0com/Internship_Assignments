import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios({
        url: "https://fakestoreapi.com/products",
        method: "GET",
      });
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container pb-10  px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white-500 h-[35rem] text-green-500 p-4 rounded shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full  mb-4"
          />
          <div className="h-[25%]">
            <h3 className="text-l font-bold mb-2">{product.title}</h3>
            <p className="text-lg mb-2">$ {product.price}</p>
            <p className="mb-2">Rating: {product.rating.rate}</p>
          </div>
          <div className="mt-4 flex justify-between space-x-10 ">
            <Link
              to={`products/:${product.id}`}
              className="text-white bg-green-500 px-4 py-2 rounded mr-2">
              View Details
            </Link>
            <button className="bg-slate-100 text-green-500 px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
