import React from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../Auth/index";
import {Link} from "react-router-dom"
const Dashboard = () =>{
    
    const {user} = isAuthenticated();

    const userLinks = () => {
        return (
            <div className = 'card mt-5'>
                <h4 className = "card-header">User Links</h4>
                <ul className = 'list-group'>
                    <li className="list-group-item">
                        <Link className= "nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className= "nav-link" to="/profile/update">Update Profile!</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userInfo = () => {
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
      );
    };

    const purchaseHistory = () => {
      return (
        <div className="card m-5">
          <h3 className="card-header">Purchase history</h3>
          <ul className="list-group">
            <li className="list-group-item">ITEM 1</li>
          </ul>
        </div>
      );
    };

    return(
        <Layout title="Dashboard" description={`Hi, ${user.name}!`} className="container-fluid">
          <div className="row">
              <div className="col-3">
                {userLinks()}
              </div>
              <div className="col-9">
                  {userInfo()}
                  {purchaseHistory()}
                  </div>
          </div>  
        </Layout> 
    )
}

export default Dashboard;