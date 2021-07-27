import React from 'react'
import {isAuthenticated} from "../Auth/index";
import styles from "./AdminInfo.module.css"
const AdminInfo = () => {
    const {user} = isAuthenticated();
    return (
        <div className={styles.container}>
          <h3 className="card-header">Admin Information</h3>
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

export default AdminInfo
