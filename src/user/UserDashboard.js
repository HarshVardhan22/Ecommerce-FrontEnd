import React from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../Auth/index";

const Dashboard = () =>{
    
    const {user} = isAuthenticated();

    return(
        <Layout title="Dashboard" description="User Dashboard" className="container">
            <div className = "card m-5">
                <h3 className="card-header">User Information</h3>
                <ul className = "list-group">
                    <li className="list-group-item">{user.name}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.role==1?"Admin":"Registered User"}</li>
                </ul>
            </div>
            <div className="card m-5">
            <h3 className="card-header">Purchase history</h3>
            <ul className = "list-group">
                    <li className="list-group-item">ITEM 1</li>
                </ul>
            </div>
        </Layout> 
    )
}

export default Dashboard;