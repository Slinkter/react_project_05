import React from "react";
import Product from "./Product";
import { useFetch } from "./useFetch";
import "./App.css";
const url = "https://course-api.com/react-prop-types-example";

function App() {
  //
  const { products } = useFetch(url);
  

  return <React.Fragment>
  <div className="container">
  <h2>Products</h2>
  {products.map(product => {
    return ( <Product key={product.id} {...product} />)
   
  })}
  </div>
  
  </React.Fragment>;
}

export default App;
