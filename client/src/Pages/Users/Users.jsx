import React from "react";
import '../../Pages/Home/Home.css'

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <>
      <div className="app-container">

        <div className="left-sidebar-container">
          <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>
        <div className="home-container">
          <h1 style={{ fontWeight: "400" }}>Users</h1>
          <UsersList />
        </div>
      </div>
    </>
  );
};

export default Users;
