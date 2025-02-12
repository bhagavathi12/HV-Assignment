import React from "react";
import ConsentManager from "./ConsentManager";
import Home from "./Home";
import "./ConsentScreen.css";
import icon1 from "../assets/hepervergeicon.svg";
import icon2 from "../assets/angeloneicon.svg";
import {useNavigate} from 'react-router-dom'


const ConsentScreen = () => {
    const navigate = useNavigate();
    const handleAllow = () => {
        navigate('/consentscreen/token')
    }
    const handleDeny = () => {
        navigate('/')
    }
  return (
    <div className="consentscreen-outer-div">
      <Home />
      <ConsentManager />
      <div className="consent-screen-inner-div">
        <div className="consent-screen-details">
          <div className="consent-screen-header">
            <div className="consent-screen-icon">
              <img src={icon1} alt="hv-icon" className="hvicon" />
              <img src={icon2} alt="angelone" className="angelone" />
            </div>
            <div className="consent-screen-heading">
              <h1>Johndoe@gmail.com</h1>
              <p> {`<Policy Version>`}</p>
            </div>
          </div>
          <div className="consent-screen-body">
            <div className="consent-screen-inner">
              <h1 className="name">
                The following details will be collected from you by {`<XYZ_name>`}
              </h1>
              <div className="input-checkbox">
                <input type="checkbox"  />
                <label htmlFor="">Facial scan</label>
              </div>
              <div className="input-checkbox">
                <input type="checkbox"  />
                <label htmlFor="">Location access</label>
              </div>
              <div className="consent-screen-inner2">
                <h1>Purpose</h1>
                <p>Fraud prevention and compliance checks</p>
                <p>Fraud prevention and compliance checks</p>
              </div>
            </div>
          </div>
          <div className="consent-screen-sub-footer">
            <p>By clicking Allow, you allow the app to use your information in accordance to their respective <span>terms of serve</span> and <span>privacy policies</span>.</p>
            <div className="btn-container">
                <button className="deny" onClick={handleDeny}>Deny</button>
                <button className="allow" onClick={handleAllow}>Allow</button>
            </div>
          </div>
        </div>
        <p className="sdkfont">SDK Version{`<VX>`}</p>
      </div>
    </div>
  );
};

export default ConsentScreen;
