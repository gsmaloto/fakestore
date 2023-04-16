import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import useSearchStore from "../../store/searchStore";
import Search from "./Search";
import { fetchProduct } from "./fetchProduct";
import Error from "../../components/Error";
import SkeletonCard from "./SkeletonCard";

const Home = () => {
  const [foundedItem, setFoundedItem] = useState([]);
  const search = useSearchStore((state) => state.search);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery("products", fetchProduct);
  // if (isLoading) return <SkeletonCard cardsCount={8} />;
  if (error) return <Error />;

  return (
    <>
      <Search setFoundedItem={setFoundedItem} products={products} />
      <div className="myTable pt-4">
        {/* {isLoading && "Loading......"} */}
        {isLoading && <SkeletonCard cardsCount={8} />}

        {search && !foundedItem.length
          ? "no item"
          : search
          ? foundedItem?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
    </>
  );
};

export default Home;
