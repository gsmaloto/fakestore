import React from "react";

const Search = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="search here"
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
    </form>
  );
};

export default Search;
