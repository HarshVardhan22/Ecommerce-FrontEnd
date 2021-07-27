import React from 'react'
import { isAuthenticated } from "../Auth/index";
import { Link } from "react-router-dom";

const UserLinks = () => {
    return (
        <div className="card mt-5">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              Profile
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">
              Update Profile!
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default UserLinks
