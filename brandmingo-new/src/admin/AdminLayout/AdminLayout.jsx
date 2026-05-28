// import { Outlet } from "react-router-dom";

// import "./AdminLayout.css";
// import Sidebar from "../Sidebar/Sidebar";

// const AdminLayout = () => {
//   return (
//     <div className="admin-layout">
//       <Sidebar />

//       <div className="admin-main">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import "./AdminLayout.css";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = () => {
  const token = localStorage.getItem("adminToken");

  // NOT LOGGED IN
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
