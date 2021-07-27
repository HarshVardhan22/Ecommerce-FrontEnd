import React, { useEffect, useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../Auth";
import { Link } from "react-router-dom";
import { createProduct } from "./ApiAdmin";
import styles from "./AddProduct.module.css";
const AddProduct = () => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    //we will fetch the categories from BE, meanwhile will use single catg
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    //we will fetch the categories from BE, meanwhile will use single catg
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    //we do the below line bcz
    //1. we are using a common high order function to update all the field value of the STATE values
    //2. to get the values form input type file we need the event.target.files
    //3.therefore to diff bet thw commands we used a ternary opreator

    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) setValues({ ...values, error: data.error });
      else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          quantity: "",
          photo: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const newPostForm = () => {
    return (
      <form className="form col-md-6 col-sm-9 pb-5 pt-5" onSubmit={submitForm}>
        <h4>Post Photo</h4>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            name="photo"
            accept="image/*"
            onChange={handleChange("photo")}
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChange("name")}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control"
            value={description}
            onChange={handleChange("description")}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={handleChange("price")}
          />
        </div>
        <div className="form-group">
          <label>Shipping</label>
          <select
            className="form-control"
            value={shipping}
            onChange={handleChange("shipping")}
          >
            <option value="">--select--</option>
            <option value="0">No</option>
            <option value="1">Yes </option>
          </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            value={category}
            onChange={handleChange("category")}
          >
            {/* we can fetch the catg from backend here */}
            <option value="">--select--</option>
            <option value="60f94a9758103b2a5c2a2dab">Node</option>
            <option value="60f94a9758103b2a5c2a2dab">Pyhton</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={handleChange("quantity")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };

  return (
    <Layout
      title="Add Product"
      description={`Hi, ${user.name}! Ready to add a new Product?`}
    >
      <div className={styles.container}>{newPostForm()}</div>
    </Layout>
  );
};

export default AddProduct;
