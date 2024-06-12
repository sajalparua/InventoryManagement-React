import React from "react";
import DashBoardSection from "../components/DashBoardSection";
import TrafficSection from "../components/TrafficSection";
import RecentActivtiesSection from "../components/RecentActivtiesSection";
import OrederStatusSection from "../components/OrederStatusSection";

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
      </div>
      <div className="row m-0 border1">
        <div className="col-lg-4 border">
          <RecentActivtiesSection/>
        </div>
        <div className="col-lg-8 border1">
          <OrederStatusSection/>
        </div>

      </div>
    </div>
  );
};

export default DashBoard;
