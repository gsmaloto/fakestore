import React from "react";
import useSearchStore from "../../store/searchStore";
import Skeleton from "react-loading-skeleton";

const Search = ({ setFoundedItem, products }) => {
  const handleSearch = useSearchStore((state) => state.handleSearch);
  const search = useSearchStore((state) => state.search);

  return (
    <form className="flex justify-center md:justify-end pb-4 md:mr-24 pt-4">
      <div>
        <label htmlFor="" className="text-md md:text-xl w-auto">
          {products ? "Search: " : <Skeleton height={40} width="40vh" />}
        </label>
        {products && (
          <input
            className="border px-4 py-2 max-w-[400px] text-sm"
            type="search"
            placeholder="Search product . . ."
            value={search}
            onChange={(e) => {
              let curProducts = products.filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(e.target.value.toLocaleLowerCase())
              );
              setFoundedItem(curProducts);
              handleSearch(e.target.value);
            }}
          />
        )}
      </div>
    </form>
  );
};

export default Search;
