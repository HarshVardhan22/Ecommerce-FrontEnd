import React from "react";
// import "./Order.css";
import { Link } from "react-router-dom";
import { emptyCart } from "./cartHelpers";
const Order = () => {


  return (
    <div className="container order">
      <div className="row">
        <div className="col-8 offset-2 col-md-4 offset-md-4 text-center">
          <h2>Delivery Details</h2>
        </div>
      </div>
      <div className="container login">
        <div className="row ">
          <div className="col-8 offset-2 col-md-4 offset-md-4">
            <form>
              <h5>Name</h5>
              <input type="email" className="form-control mt-2 mb-2" required />

              <h5>Phone Number</h5>
              <input
                type="number"
                className="form-control mt-2  mb-2"
                required
              />

              <h5>Address</h5>
              <input
                type="number"
                className="form-control mt-2  mb-2"
                placeholder="Address Line 1"
                required
              />
              <input
                type="number"
                className="form-control mt-2  mb-2"
                placeholder="Address Line 2"
                required
              />

              <h5>Pincode</h5>
              <input
                type="number"
                className="form-control mt-2  mb-2"
                required
              />

              <Link to="/orderPlaced">
                <button
                  className="login__signInButton mt-2  mb-2"
                  onClick={emptyCart(()=>{console.log("Order Placed!")})}
                >
                  Place Order
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
