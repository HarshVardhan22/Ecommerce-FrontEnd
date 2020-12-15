import React from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../Auth/index";
import {Link} from "react-router-dom"
const AdminDashboard = () =>{
    
    const {user} = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className = 'card mt-5'>
                <h4 className = "card-header">Admin Links</h4>
                <ul className = 'list-group'>
                    <li className="list-group-item">
                        <Link className= "nav-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className= "nav-link" to="/create/product">Create Product</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminInfo = () => {
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


    return(
        <Layout title="Dashboard" description={`Hi, ${user.name}!`} className="container-fluid">
          <div className="row">
              <div className="col-3">
                {adminLinks()}
              </div>
              <div className="col-9">
                  {adminInfo()}
        
                  </div>
          </div>  
        </Layout> 
    )
}

export default AdminDashboard;