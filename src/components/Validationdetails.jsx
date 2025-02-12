import React from "react";
import "./Validationdetails.css";
import Home from "./Home";
import ConsentManager from "./ConsentManager";
import tick from "../assets/tick.svg";

const Validationdetails = () => {
  return (
    <div className="validation-outer-screen">
      <Home />
      <ConsentManager />
      <div className="validation-details-screen">
        <div className="validation-details-outer-div">
          <div className="validation-details-input">
            <div className="input-div">
              <label htmlFor="token">Token</label>
              <input type="text" placeholder="<Token Value>" />
            </div>
            <button className="validation-btn">Validate Token</button>
          </div>
          <div className="validation-details">
            <div className="consent-status">
              <h1>Consent Status</h1>
              <button>
                <img src={tick} />
                <h1>Accepted</h1>
              </button>
            </div>
            <div className="consent-details">
              <h1>Consent Details</h1>
              <div className="consent-details-container">
                <div className="detail1">
                  <h1>Device ID</h1>
                  <p>b9f8e2d4-9c3a-4571-ae84-3c9df20297a1</p>
                </div>
                <div className="detail2">
                  <h1>hashedUserId</h1>
                  <p>
                    e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                  </p>
                </div>
                <div className="detail3">
                  <h1>timestamp</h1>
                  <p>2024-06-12T14:35:22Z</p>
                </div>
                <div className="detail3">
                  <h1>ipAddress</h1>
                  <p>192.168.1.15</p>
                </div>
                <div className="detail3">
                  <h1>Scope</h1>
                  <p>facial scan, Location Access</p>
                </div>
                <div className="detail4">
                  <h1>Purpose</h1>
                  <div className="para">
                    <p>User onboarding and identity verification</p>
                    <p>Fraud prevention and compliance checks</p>
                  </div>
                </div>
              </div>
              <div className="tenure">
                <h1>Tenure</h1>
                <div className="tenure-heading">
                    <h2>Scope</h2>
                    <p>Chrome</p>
                </div>
                <div className="tenure-heading">
                    <h2>browserVersion</h2>
                    <p>124.0.6367.119</p>
                </div>
                <div className="tenure-heading">
                    <h2>operatingSystem</h2>
                    <p>Windows 11</p>
                </div>
                <div className="tenure-heading">
                    <h2>deviceType</h2>
                    <p>Desktop</p>
                </div>
                <div className="tenure-details">
                    <h1>Tenure</h1>
                    <div className="tenure-heading">
                        <h2>humanReadable</h2>
                        <p>2025-06-12T14:35:22Z</p>
                    </div>
                    <div className="tenure-heading">
                        <h2>machineTimestamp</h2>
                        <p>1755022522</p>
                    </div>
                </div>
                <div className="sdk-version">
                    <h1>SDK Version</h1>
                    <div className="tenure-heading">
                        <h2>Version</h2>
                        <p>v1.3.2</p>
                    </div>
                    <div className="version-heading">
                        <h2>link</h2>
                        <p>https://example.com/sdk/releases/v1.3.2</p>
                    </div>
                </div>
                <div className="privacy-policy">
                    <h1>Privacy Policy</h1>
                    <div className="tenure-heading">
                        <h2>privacyPolicy</h2>
                        <p>https://example.com/privacy/v1.3.2</p>
                    </div>
                    <div className="tenure-heading">
                        <h2>User Action</h2>
                        <p>accept</p>
                    </div>
                    <div className="tenure-heading">
                        <h2>actionTimestamp</h2>
                        <p>2024-06-12T14:35:22Z</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validationdetails;
