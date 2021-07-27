import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../Auth";
import { Link } from "react-router-dom";
import { createCategory } from "./ApiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
 const [tempName,setTempName] = useState("");
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    //make req to API to create category
    createCategory(user._id,token, {name})
    .then(data => {
        if(data.error){
            setError(true)
        }
        else{
            setError("");
            setTempName( name)
            setSuccess(true);
            setName("");
        }
    })
  };

  const showSuccess =() =>{
      if(success){
          return <h3 className="text-success">{tempName} is created</h3>
      }
  }

  const showError =() =>{
    if(error){
        return <h3 className="text-danger">{name} category already present!</h3>
    }
}

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group  pb-3 pt-3">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
        
      </div>
      <button className="btn btn-outline-primary">Add</button>
    </form>
  );

  return (
    
    <Layout
      title="Dashboard"
      description={`Hi, ${user.name}! Ready to add a new Category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
        {showSuccess()}
        {showError()}
        {newCategoryForm()}</div>
      </div>
    </Layout>
  );
};

export default AddCategory;
