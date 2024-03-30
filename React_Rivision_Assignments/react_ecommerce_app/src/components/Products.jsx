import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

const productReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...prevState, products: payload };
    case "FILTER_PRODUCTS":
      return { ...prevState, filterProduct: payload };
    default:
      return state;
  }
};

const Products = () => {
  const [state, dispatch] = useReducer(productReducer, { products: [] , filterProduct:[]});
  const { products } = state;

  useEffect(() => {
    fetchProducts();
    console.log("filter",state.filterProduct);
  }, []);
  
  const handleFilter = (e) => {
    const category = e.target.value;
    if (category === "all") {
      dispatch({ type: "FILTER_PRODUCTS", payload: products });
    } else {
      const filterProduct = products.filter(
        (product) => product.category === category
      );
      dispatch({ type: "FILTER_PRODUCTS", payload: filterProduct });
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios({
        url: `https://fakestoreapi.com/products`,
        method: "GET",
      });
      console.log(data);
      dispatch({ type: "FETCH_PRODUCTS", payload: data });
      dispatch({ type: "FILTER_PRODUCTS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-6">
      <div className="w-full h-14 shadow-md mt-2 flex justify-around items-center">
        <div className="w-1/6">
          <label htmlFor="">Category : </label>
          <select
            name="category"
            id=""
            onChange={handleFilter}
            className="border border-gray-300 rounded px-2 py-1">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's</option>
            <option value="women's clothing">Women's</option>
          </select>
        </div>
        <div className="w-1/6 product_length"></div>
        <span className="text-gray-600">
          Products : <span className="text-green-500 ">{state.filterProduct.length}</span>
        </span>
      </div>

      <div className="container pb-10   mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
        {state.filterProduct.map((product) => (
          <div
            key={product.id}
            className="bg-white-500 h-[35rem] text-slate-700 p-4 rounded shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 w-full  mb-4"
            />
            <div className="h-[25%]">
              <h3 className="text-l font-bold mb-2">{product.title}</h3>
              <p className="text-lg  mb-0">
                <span className="font-bold">$</span> {product.price}
              </p>
              <p className="mb-2">
                <span className="font-bold ">Rating:</span>{" "}
                {product.rating.rate}
              </p>
            </div>
            <hr className="mt-1" />
            <div className="mt-4 flex justify-between space-x-10 ">
              <Link
                to={`products/${product.id}`}
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
    </div>
  );
};

export default Products;
