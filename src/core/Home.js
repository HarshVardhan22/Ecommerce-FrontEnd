import React, { useEffect, useState } from "react";
import styles from "./Home.module.css"
import { getProducts } from "./apiCore";
const Home =()=> { 
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);  
  const [error,setError] = useState(false);

  const loadProductsBySell =()=>{
    getProducts('sold').then(data => {
      if(data.error)
        setError(data.error)
      else
        setProductsBySell(data)
    })
  }
  const loadProductsByArrival =()=>{
    getProducts('createdAt').then(data => {
      if(data.error)
        setError(data.error)
      else
        setProductsByArrival(data)
    })
  }

  useEffect(()=>{
    loadProductsByArrival();
    loadProductsBySell();
  },[]
  )
  return (
      <div className={styles.container}>
         <h1>Home Page</h1>
         <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
         <h2>nostrum dolore amet ullam maiores, </h2>
         <h2>akjhfkjab kjbaijsbdjka kasb</h2>
         {JSON.stringify(productsByArrival)}
         {JSON.stringify(productsBySell)}
      </div>
    );
  }
  
  export default Home;
