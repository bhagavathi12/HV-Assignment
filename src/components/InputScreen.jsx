import React from "react";
import Home from "./Home";
import ConsentManager from "./ConsentManager";
import './InputScreen.css'
import { useNavigate } from "react-router-dom";
import ConsentScreen from "./ConsentScreen";

const InputScreen = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/consentscreen')
    }
  return <div className="input-screen-outer-div">
    <Home />
    <ConsentManager />
    <div className="consentdetails-screen">
        <div className="consent-details-div">
            <h1>Enter Consent Details</h1>
            <div className="consent-details-inner-div">
                <form onSubmit={handleClick}>
                    <div className="input">
                        <label htmlFor="customerid">Customer ID</label>
                        <input type="text" placeholder="12345" name="customerid" />
                    </div>
                    <div className="input">
                        <label htmlFor="redirecturl" >Redirect URl</label>
                        <input type="text" placeholder="https://google.com" name="redirecturl" id="redirecturl" />
                    </div>
                    <div className="input">
                        <label htmlFor="policyversion" >Policy Version</label>
                        <input type="text" placeholder="V1" name="policyversion" id="policyversion" />
                    </div>
                    <div className="input">
                        <label htmlFor="purpose" >Purpose</label>
                        <input type="text" placeholder="<input>" name="purpose" id="purpose" />
                    </div>
                    <div className="input">
                        <label htmlFor="scope" >Scope</label>
                        <input type="text" placeholder="<input>" name="scope" id="scope" />
                    </div>
                    <button >Request Consent</button>
                </form>
            </div>
        </div>
    </div>
  </div>;
};

export default InputScreen;
