import React from "react";
import DashBoardSection from "../components/DashBoardSection";
import TrafficSection from "../components/TrafficSection";
// import RecentActivtiesSection from "../components/RecentActivtiesSection";
import OrederStatusSection from "../components/OrederStatusSection";
import CardSection from "../components/CardSection";
import RecentActivities from "../components/RecentActivtiesSection";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="row m-0 my-3">
        <div className="col-lg-9  border1   ">
          <DashBoardSection/>   
        </div>
        <div className="col-lg-3 border1 ">
          <TrafficSection/>
        </div>
        <div className="col-lg-12 py-2">
          <CardSection/>
        </div>

      </div>
      <div className="row m-0 ">
        <div className="col-lg-4 ">
          <RecentActivities/>
        </div>
        <div className="col-lg-8 border1">
          <OrederStatusSection/>
        </div>

      </div>
    </div>
  );
};

export default DashBoard;
