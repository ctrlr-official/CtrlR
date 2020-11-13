import React from 'react';
import './Auth.css';
import kitten from '../../../assets/kitten.gif'
import comp from '../../../assets/comp.png';
import { Link } from 'react-router-dom';


const Auth = () => {
    return (

        <div className='Auth'>
            <header>
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"></input>
            <div class="name">
                <p>Ctrl+R</p>
            </div>
            <div className="tabs">
                <div class="firstbtn">
                    <Link to="/"
                        className="btn1 knopka">
                        Home
                        </Link>
                </div>
                <div className="secondbtn">
                    <Link to="/cybercrime"
                        className="btn2 knopka">
                        CyberCrime
                        </Link>
                </div>
                <div className="thirdbtn">
                    <Link to="/warnings"
                        className="btn3 knopka">
                        Warnings
                        </Link>
                </div>
                <div className="fourthbtn">
                    <Link to="/statistics"
                        className="btn4 knopka">
                        Statistics
                        </Link>
                </div>
                <div className="fifthbtn">
                    <Link to="/about"
                        className="btn5 knopka">
                        About
                        </Link>
                </div>
                <div className="sixthbtn">
                    <Link to="/contact"
                        className="btn6 knopka">
                        Contact
                        </Link>
                </div>
            </div>
            </header>
            <div className="imgs">
            <div className="catik">
                <img src={kitten} alt="cat"/>
            </div>
            <div className="mainimg">
                <img  src={comp} alt="computer"/>
            </div>
            <div className="seventh">
                    <Link to="/cybercrime"
                        className="btn">
                        What Is CyberCrime?
                        </Link>
                </div> 
            </div>
        </div>
    )
}

export default Auth
