import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="app-container">

      <div className="left-sidebar-container">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </div>

      <div className="home-container">
        <QuestionsDetails />
      </div>

      <div className="right-sidebar-container">
        <RightSidebar />
      </div>

    </div>

  );
};

export default DisplayQuestion;
