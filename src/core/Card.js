import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import ShowImage from "./ShowImage";
const Card = ({ product }) => {
  return (
    <div className="col-sm-8 col-md-8 col-l-6 col-xl-4 mb-3 mt-3">
      <div className="card">
        <div className="card-header">
          <h2>{product.name}</h2>
        </div>
        <div className="card-body">
          <ShowImage item={product} url="product" />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Link to="/">
            <button>View Product</button>
          </Link>
          <Link to="/">
            <button>Add to Cart </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
