import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="app-container">
      <div className="left-sidebar">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </div>
      <div className="home-container">
        <HomeMainbar />
      </div>
      <div className="right-sidebar">
        <RightSidebar />
      </div>

    </div>
  );
};

export default Questions;
