import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);

  const [products, setProduct] = useState([]);

  const getProduct = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProduct(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProduct();
  }, [url, getProduct]);

  return { loading, products };
};
