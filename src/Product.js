import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default-image.jpeg";

function Product(props) {
  const image = props.image;
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt={"default name"} />
      <h4> {props.name || "default name"} </h4>
      <p> {props.price || "3.99"}</p>
    </article>
  );
}

Product.protoType = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
