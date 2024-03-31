import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useReducer } from "react";
import Loading from "./Loading";

const productReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...prevState, product: payload, loading: false };
    case "LOADING":
      return { ...prevState, loading: true };
    default:
      return state;
  }
};

const SingleProduct = () => {
  const params = useParams();
  const [state, dispatch] = useReducer(productReducer, {
    product: {},
    loading: false,
  });
  const product = {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  };
  // const { image, title, description, price, category, rating, reviews } =
  //   product;
  const fetchProducts = async () => {
    dispatch({ type: "LOADING" });
    try {
      console.log("in fetchProducts");
      const { data } = await axios({
        url: `https://fakestoreapi.com/products`,
        method: "GET",
      });
      console.log("data", data);
      const pro = data.filter(
        (product) => product.id === Number(params.product_id)
      );
      dispatch({ type: "FETCH_PRODUCTS", payload: pro[0] });
      console.log("pro", pro[0]);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("pro",state.product)

  useEffect(() => {
    fetchProducts();
  }, []);
  const {
    image,
    title,
    description,
    price,
    category,
    rating,
  } = state.product;
    if (state.loading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
    <div className=" max-w-md h-4/5 mx-auto bg-green-500 text-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="bg-white flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-2/3 h-64 object-fill object-center block "
        />
      </div>
      <div className="px-6 py-4">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-200 mb-2">{description}</p>
        <p className="mb-2">$ {price}</p>
        <p className="text-sm mb-2">Category: {category}</p>
        <div className="flex items-center mb-2">
          <span className="mr-2">Rating: {rating?.rate}</span>
          <span>{rating?.count} Reviews</span>
        </div>
        <button className="bg-white text-green-500 px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
      </div>
      </div>
  );
};

export default SingleProduct;
