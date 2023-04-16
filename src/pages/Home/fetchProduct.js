// https://fakestoreapi.com/products

import axios from "axios";

export const fetchProduct = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

// this is code to use this

/*

const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], () =>
    fetchProducts("https://fakestoreapi.com/products")
  );

*/
