import React from "react";
import Content from "../content/Content";
import Map from "../map/Map";
import Toolbar from "../Toolbar/Toolbar";
// import Navbar from '../nav/Navbar';
import "./landingPage.css";
import SideDrawer from "../SideDrawer/SideDrawer";
const LandingPage = () => {
  return (
    <div style={{height: '100%'}}>
      <Toolbar />
      <SideDrawer />
      <main className="landingpage__main">
        <Content />
        <Map />
      </main>
    </div>
  );
};

export default LandingPage;
