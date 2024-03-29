import React from "react";
import { useParams } from "react-router-dom";

const SinglePageProduct = () => {
    const params = useParams(); // useParams is a hook that allows you to access the URL parameters
    console.log(params)
  return <div>SinglePageProduct {params.product_id}</div>;
};

export default SinglePageProduct;
