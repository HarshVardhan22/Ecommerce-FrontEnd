import React from "react";
import { Link } from "react-router-dom";
// import "./Order.css";

const OrderPlaced = () => {
  return (
    <div className="order cont">
      <h1>Order Placed</h1>
      <Link to="/">
        <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  );
};

export default OrderPlaced;
