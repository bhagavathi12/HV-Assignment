import React from 'react';
import Home from './Home';
import ConsentManager from './ConsentManager';
import './Token.css';
import { useNavigate } from 'react-router-dom';

const Token = () => {
    const navigate = useNavigate()
    const handleValidation = () => {
        navigate('/consentscreen/token/validate')
    }

  return (
    <div className='token-outer-div'>
        <Home />
        <ConsentManager />
        <div className='token-screen'>
            <div className='token-inner-div'>
                <div className="input-div">
                    <label htmlFor="token">Token</label>
                    <input type="text" placeholder='<Token Value>' />
                </div>
                <button onClick={handleValidation} >Validate Token</button>
            </div>
        </div>
    </div>

  )
}

export default Token