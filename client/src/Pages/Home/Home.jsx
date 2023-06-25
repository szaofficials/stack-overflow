import React, { useState } from "react";
import Feeds from "./Feeds";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import "./Home.css"

const Home = ({ slideIn }) => {
  const [activeTab, setActiveTab] = useState('feed');

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app-container">



      {/* Left Sidebar */}
      <div className="left-sidebar-container">
        <LeftSidebar slideIn={slideIn} />
      </div>



      {/* Main Content */}
      <div className="home-container">
        {/* Tab Container */}
        <div className="tab-container">
          <div className={`tab ${activeTab === 'feed' ? 'active' : ''}`} onClick={() => switchTab('feed')}
          >
            Feed
          </div>
          <div className={`tab ${activeTab === 'community' ? 'active' : ''}`} onClick={() => switchTab('community')}>
            Community
          </div>
        </div>
        {/* Feed Tab Content */}
        <div className="tab-content-feeds">
          {activeTab === 'feed' && <Feeds />}
        </div>
        {/* Community Tab Content */}
        <div className="tab-content-community">
          {activeTab === 'community' && (
            <div className="community-content">
              <div className="homemainbar-in-community">
                <HomeMainbar />
              </div>
              {/* Add community content here */}
            </div>
          )}
        </div>
      </div>




      {/* Right Sidebar */}
      <div className="right-sidebar-container">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
