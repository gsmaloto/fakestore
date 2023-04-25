import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isLoading }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="xl:w-[200px] h-[200px] md:h-[250px] cursor-pointer bg-gray-100 hover:shadow-xl group relative">
        <div>
          <div className="bg-white w-full h-[90px] md:h-[120px] overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="object-contain object-center h-full mx-auto group-hover:scale-125"
              />
            ) : (
              <Skeleton height={120} />
            )}
          </div>

          <h4 className="px-2 pt-2 text-sm font-semibold line-clamp-2">
            {product.title ? product.title : <Skeleton width="80%" />}
          </h4>
          <div className="flex flex-col justify-between px-4 py-2 md:flex-row">
            <p>
              {product.rating ? (
                `⭐${product.rating.rate}/5`
              ) : (
                <Skeleton width={50} />
              )}
            </p>
            <p className="font-bold">
              {product.rating ? (
                <>
                  {product.rating.count}{" "}
                  <span className="font-medium">Sold</span>
                </>
              ) : (
                <Skeleton width={80} />
              )}
            </p>
          </div>
        </div>
        <h4 className="absolute bottom-[10px] right-2 bg-red-500 px-1 rounded text-sm md:text-md text-white">
          {product.price ? `$${product.price}` : <Skeleton width={50} />}
        </h4>
      </div>
    </Link>
  );
};

export default ProductCard;
