import React from "react";
import{Link,withRouter} from "react-router-dom";

//the function isActive is used to determine which tab is clicked by the user ie home, signIn or Signup
//it accepts two arguments history and path where history.location.pathname is browser attribute
//path is the address that has been requested by the user
//if the path and history is same the tab will lit up in orangered color else white

const isActive = (history,path) => {
    if(history.location.pathname === path)
        return {color: 'orangered'}
    return {color:"#ffffff"}
}
const Menu =({ history })=> {
    return (
      <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
              <Link className = "nav-link" to="/" style = {isActive(history,"/")}>Home</Link>
          </li>
          <li className="nav-item">
              <Link className = "nav-link" to="/signup" style = {isActive(history,"/signup")}>Sign Up</Link>
          </li>
          <li className="nav-item">
              <Link className = "nav-link" to="/signin" style = {isActive(history,"/signin")}>Sign In</Link>
          </li>

      </ul>
    );
  }
  
  export default withRouter(Menu);
