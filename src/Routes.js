import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import Home from "./core/Home";
 
import PrivateRoute from "./Auth/PrivateRoute";

import Dashboard from './user/UserDashboard';

const Routes = () =>{
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component = {Home}/>
                <Route path= "/signup" exact component = {SignUp}/>
                <Route path= "/signin" exact component = {SignIn}/>
                <PrivateRoute path="/dashboard" exact component = {Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
