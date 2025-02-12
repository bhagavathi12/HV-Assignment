import React from "react";
import "./ConsentManager.css";
import Home from "./Home.jsx";
import Demo from "../assets/Demo.svg";
import Configuration from "../assets/Configurations.svg";
import Search from "../assets/Search.svg";

const ConsentManager = () => {
  return (
    <div className="consentmanager-outer-div">
      <div className="heading">
        <h1>Consent Manager</h1>
      </div>
      <div className="list">
        <button className="Demo">
          <div className="demo-div">
            <img src={Demo} alt="demo-icon" />
            <h1>Demo</h1>
          </div>
        </button>
        <button className="Configurations">
          <div className="configurations-div">
            <img src={Configuration} alt="configuration-icon" />
            <h1>Configurations</h1>
          </div>
        </button>
        <button className="Search">
          <div className="search-div">
            <img src={Search} alt="search-icon" />
            <h1>Search</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ConsentManager;
