import React from "react";
import Sidebar from "../components/Sidebar";
import  {Outlet}  from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen ">
        <Sidebar className="flex-1/3" />
        <div className="flex-2 overflow-y-auto bg-cream">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
