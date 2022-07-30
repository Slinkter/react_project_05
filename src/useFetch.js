import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
    //
    const [loading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);
    //
    const getProduct = useCallback(async () => {
        const response = await fetch(url); // response: Response {type: 'cors', url: 'https://course-api.com/react-prop-types-example', redirected: false, status: 200, ok: true, …}
        const products = await response.json(); // products : (5) [{…}, {…}, {…}, {…}, {…}]
      /*   console.log("response :", response);
        console.log("products :", products); */
        setProduct(products);
        setLoading(false);
    }, [url]);
    //
    useEffect(() => {
        getProduct();
    }, [url, getProduct]);

    return { loading, products };
};
