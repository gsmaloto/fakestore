import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "./fetch";
import { AiFillStar } from "react-icons/ai";
import { GrDiamond } from "react-icons/gr";

import SkeletonLoadng from "./SkeletonLoadng";
const SingleProduct = () => {
  const { productId } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery(["product", productId], () => fetchSingleProduct(productId));

  if (isLoading) return <SkeletonLoadng />;

  return (
    <div className="m-4 border-4 rounded sm:grid sm:grid-cols-3 max-w-[900px] md:mx-auto">
      {/* col 1 */}
      <div className="flex items-center justify-center py-4 overflow-hidden">
        <img
          src={product?.image}
          alt=""
          className="object-contain object-center max-w-[100px] md:max-w-[150px]"
        />
      </div>
      {/* col 2 */}
      <div className="p-4 sm:col-span-2">
        <h3 className="px-4 py-4 mb-4 text-white bg-red-500 rounded">
          {product?.title}
        </h3>
        <div className="flex flex-wrap justify-around mb-4">
          <h4 className="flex items-center justify-center gap-2 capitalize">
            <GrDiamond className="text-2xl" /> {product?.category}
          </h4>
          <div className="flex items-center gap-1">
            <p className="flex mr-1">
              <AiFillStar className="text-2xl text-yellow-500" />
              {product?.rating?.rate}/5
            </p>
            <p className="text-xl font-semibold">|</p>
            <p className="text-gray-700">{product?.rating?.count} Sold</p>
          </div>
        </div>
        <p className="px-2 py-4 bg-gray-200 rounded">{product?.description}</p>
        <div className="flex justify-end mt-8 mr-8">
          <label htmlFor="quantity" className="mr-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="w-12 h-8 p-2 text-right border-2 border-gray-500"
            value={1}
          />
        </div>
        <div className="flex justify-end gap-8 m-8">
          <button className="px-4 py-2 font-semibold text-gray-700 border-2 border-gray-300 hover:bg-gray-200">
            Add To Cart
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-red-500 hover:bg-red-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
