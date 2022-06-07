import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Location from "../content/location";
const Home = () => {
  return (
    <div className="homepage">
      <NavBar />
      <SideBar />
      <Location />
    </div>
  );
};

export default Home;
