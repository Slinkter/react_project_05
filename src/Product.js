import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default-image.jpeg";

function Product(props) {
  const { image, name, price } = props;
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt="name" />
      <h4>{name || "name "}</h4>
      <p>{price || "3.99"} </p>
    </article>
  );
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
