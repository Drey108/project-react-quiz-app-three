import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function HomeComponent() {
  return (
    <div>
      <div className="home"><h2 style={{ fontSize: "50px" }}>Quiz App</h2></div>
      <div>
        <NavLink to="/Quiz">
          <button className="home-bt">Play</button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeComponent;