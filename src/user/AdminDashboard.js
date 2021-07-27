import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../Auth/index";
import { Link } from "react-router-dom";
import AdminLinks from "../admin/AdminLinks";
import AdminInfo from "../admin/AdminInfo";
const AdminDashboard = () => {
  const { user } = isAuthenticated();

  return (
    <Layout
      title="Dashboard"
      description={`Hi, ${user.name}!`}
      className="container-fluid"
    >
      <div className="row">
    
        <div className="col-9">
          <AdminInfo />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
