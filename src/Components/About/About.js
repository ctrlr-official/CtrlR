import React from 'react';
import './About.css'
import Ani from '../../assets/Ani.png'
import Alina from '../../assets/Alina.png'
import Mary from '../../assets/Mary.png'
import Tamara from '../../assets/Tamara.png'
import back from '../../assets/back.png'
import { Link } from 'react-router-dom';

const About = () =>{
    return (
        <div className="About">
             <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        <img src={back} alt="backicon"/>
                        </Link>
                </div>
            <div className="anun">
               <p> Meet Our Team</p>
            </div>
            <div className="boxik">
                <div className="firstgridbox gb">
                    <img src={Ani} alt="memberone"/>
                    <p>Ani Arzumanyan</p>
                    <p>Developer</p>
                </div>
                <div className="secondgridbox gb">
                    <img src={Alina} alt="membertwo"/>
                    <p>Alina Virabyan</p>
                    <p>Business analytic</p>
                </div>
                <div className="thirdgridbox gb">
                    <img src={Mary} alt="memberthree"/>
                    <p>Mary Grigoryan</p>
                    <p>Developer </p>
                </div>
                <div className="fourthgridbox gb">
                    <img src={Tamara} alt="memberfour"/>
                    <p>Tamara Sargsyan</p>
                    <p>Designer</p>
                </div>
                <div className="fifthgridbox gb">
                    <img src={Tamara} alt="memberfive"/>
                    <p>Rustam Davtyan</p>
                    <p>Manager</p>
                </div>
            </div>
            <div className="teamname"><p>Ctrl+R</p></div>
        </div>
    )
}

export default About
