import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./user/SignUp";
import SignIn from "./user/SignIn";
import Home from "./core/Home";
import PrivateRoute from "./Auth/PrivateRoute";
import AdminRoute from "./Auth/AdminRoute";
import Dashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";

const Routes = () =>{
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component = {Home}/>
                <Route path= "/signup" exact component = {SignUp}/>
                <Route path= "/signin" exact component = {SignIn}/>
                <PrivateRoute path="/user/dashboard" exact component = {Dashboard}/>
                <AdminRoute path="/admin/dashboard" exact component = {AdminDashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
