import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducto] = useState([]);

  const getProduct = useCallback(async () => {
    const response = await fetch(url);
    const productos = await response.json();
    setProducto(productos);
    setLoading(false);
  },[url]);

  useEffect(() => {
    getProduct();
  }, [url, getProduct]);

  return { loading, products };
};
