import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "./fetch";
const SingleProduct = () => {
  const { productId } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery(["product", productId], () => fetchSingleProduct(productId));

  return <div>{isLoading ? "Loading" : product?.title}</div>;
};

export default SingleProduct;
