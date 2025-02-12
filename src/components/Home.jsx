import React from 'react'
import '../components/Home.css';
import Hypervergelogo from '../assets/HyperVergeLogo.svg';
import HomeLogo from '../assets/homelogo.svg'
import Applications from '../assets/Applications.svg';
import Anlaytics from '../assets/Analytics.svg';
import WorkFlow from '../assets/Workflow.svg';
import DevHub from '../assets/Dev_hub.svg'
import Account from '../assets/Account.svg'
import consentmanager from '../assets/consentmanager.svg'
import  {Link, useNavigate} from'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleClicktoHome = () =>{
        navigate('/')
    }

  return (
    <div>
        <div className="home">
            <div className="HV-logo">
                <img src={Hypervergelogo} alt="hypervergelogo" className='hypervergelogo'/>
            </div>
            <div className="outer-icon-div">
            <div className="icons-div flex-center">
                <div className="home-icon flex-center" onClick={handleClicktoHome}>
                    <img src={HomeLogo} alt="homelogo" />
                    <h3 className='home-icon-name font'>Home</h3>
                </div>
                <div className="app-icon flex-center">
                    <img src={Applications} alt="applications" />
                    <h3 className='application-name font'>Applications</h3>
                </div>
                <div className="anlaytics-icon flex-center">
                    <img src={Anlaytics} alt="applications" />
                    <h3 className='anlaytics-name font'>Anlaytics</h3>
                </div>
                <div className="workflow-icon flex-center">
                    <img src={WorkFlow} alt="workflow" />
                    <h3 className='workflow-name font'>Workflows</h3>
                </div>
                <div className="Dev-Hub-icon flex-center">
                    <img src={DevHub} alt="devhub" />
                    <h3 className='devhub-name font'>Dev Hub</h3>
                </div>
                <div className="Account-icon flex-center">
                    <img src={Account} alt="devhub" />
                    <h3 className='account-name font'>Account</h3>
                </div>
                <div className="consentmanager-icon flex-center">
                    <img src={consentmanager} alt="consentmanager" />
                    <h3 className='consentmanager-name font'>Consent Manager</h3>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Home