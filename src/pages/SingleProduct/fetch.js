// https://fakestoreapi.com/products

import axios from "axios";

export const fetchSingleProduct = async (productId) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
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
