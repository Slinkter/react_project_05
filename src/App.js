import React from "react";
import Product from "./Product"; // component
import { useFetch } from "./useFetch"; // Hook custom
import "./App.css"; // style

function App() {
    //
    const url = "https://course-api.com/react-prop-types-example";
    const { products } = useFetch(url);
    //
    return (
        <React.Fragment>
            <div className="container">
                <h2>Products</h2>
                <section className="products">
                    {products.map((item) => {
                        return <Product key={item.id} {...item} />;
                    })}
                </section>
            </div>
        </React.Fragment>
    );
}

export default App;
