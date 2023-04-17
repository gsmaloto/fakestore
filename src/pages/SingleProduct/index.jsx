import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "./fetch";
import { AiFillStar } from "react-icons/ai";
import { GrDiamond } from "react-icons/gr";

import SkeletonLoadng from "./SkeletonLoadng";
import Modal from "./Modal";
const SingleProduct = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { productId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
    console.log("modal is open");
  }

  const {
    data: product,
    error,
    isLoading,
  } = useQuery(["product", productId], () => fetchSingleProduct(productId));

  if (isLoading) return <SkeletonLoadng />;

  return (
    <>
      {isOpen && (
        <Modal image={product?.image} setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <div className="m-4 border-4 rounded sm:grid sm:grid-cols-3 max-w-[900px] md:mx-auto">
        {/* col 1 */}
        <div className="flex items-center justify-center py-4 overflow-hidden border-r-2">
          <div className="relative border-2 p-8">
            <img
              onClick={handleOpen}
              src={product?.image}
              alt=""
              className="object-contain object-center max-w-[100px] md:max-w-[150px] cursor-pointer"
            />
            <p className="absolute bottom-0 md:-bottom-12 -right-4 bg-red-500 text-white sm:text-xl py-2 px-1 rounded">
              ${product?.price}
            </p>
          </div>
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
          <p className="px-2 py-4 bg-gray-200 rounded">
            {product?.description.length <= 300 || seeMore ? (
              product?.description
            ) : (
              <>
                {product?.description.slice(0, 300)}
                <span
                  className="text-red-500 cursor-pointer hover:text-red-300"
                  onClick={() => {
                    setSeeMore(true);
                  }}
                >
                  ...see more
                </span>
              </>
            )}
          </p>
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
          <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-8 m-8">
            <button className="px-4 py-2 font-semibold text-gray-700 border-2 border-gray-300 hover:bg-gray-200">
              Add To Cart
            </button>
            <button className="px-4 py-2 font-semibold text-white bg-red-500 hover:bg-red-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
