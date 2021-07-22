import React, { Fragment } from "react";
import styles from "./Layout.module.css";
import Menu from "./Menu";

const Layout =({title = "Title",description = "description",className,children})=> (
    
        <React.Fragment>
         
            <div className={styles.container}>
            <div className={styles.jumbotron}>
             <h1>{title}</h1> 
             <p className="lead">{description}</p>
            </div>           
            <div className={className}>{children}</div>    
            </div>
        </React.Fragment>
        
    );
  
  
  export default Layout;
