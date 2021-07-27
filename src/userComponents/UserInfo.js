import React from 'react'
import { isAuthenticated } from "../Auth/index";
const UserInfo = () => {
    const { user } = isAuthenticated();
    return (
        <div className="card m-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{user.name}</li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">
            {user.role == 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    )
}

export default UserInfo
