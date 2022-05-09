import React from "react";
import PropType from "prop-types";
import defaultImage from "./default-image.jpeg";
function Product(props) {
  const { id, image, name, price } = props;
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h4>{name || "default name"}</h4>
      <p>{price || "3.99"}</p>
    </article>
  );
}

Product.propTypes = {
  image: PropType.object.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,
};

export default Product;
