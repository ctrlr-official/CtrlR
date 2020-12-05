import React from 'react';
import './Warnings.css'
import back from '../../assets/back.png'
import { Link } from 'react-router-dom';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import fourth from '../../assets/4.png'
import fifth from '../../assets/5.png'
import sixth from '../../assets/6.png'
import seventh from '../../assets/7.png'
import eightth from '../../assets/8.png'
import ninth from '../../assets/9.png'
import tenth from '../../assets/10.png'
import eleventh from '../../assets/11.png'
import twelveth from '../../assets/12.png'



const Warnings = () => {
    return (
        <div className="Warnings">
             <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        <img src={back} alt="backic"/>
                        </Link>
                </div>
            <div className="warningner">How to protect yourself against cybercrime</div>
            <div class="container">
            <div class="firstgrid box" >
                <img src={first} alt="keyboard"/>
                <p>Do not send your Id, email, card code and card number to suspicious websites, as those contain many
                    important and personal information.</p>
            </div>

            <div class="secondgrid box">
            <img src={second} alt="keyboard"/>
                <p>Do not trust anonymous pages and send your personal pictures or information, as it can be used
                    against you.</p>
            </div>
            <div class="thirdgrid box">
            <img src={third} alt="keyboard"/>
                <p>Use a full-service internet security suite.</p>
            </div>
            <div class="fourthgrid box">
            <img src={fourth} alt="keyboard"/>
                <p>Use strong passwords.</p>
            </div>
            <div class="fifthgrid box">
            <img src={fifth} alt="keyboard"/>
                <p>Manage your social media settings.</p>
            </div>
            <div class="sixthgrid box">
            <img src={sixth} alt="keyboard"/>
                <p>Keep your software updated.</p>
            </div>
            <div class="seventhgrid box">
            <img src={seventh} alt="keyboard"/>
                <p>Talk to your children about the internet.</p>
            </div>
            <div class="eighthgrid box">
            <img src={eightth} alt="keyboard"/>
                <p>Keep an eye on the kids</p>
            </div>
            <div class="ninthgrid box">
            <img src={ninth} alt="keyboard"/>
                <p>Take measures to help protect yourself against identity thef.</p>
            </div>
            <div class="tenthgrid box">
            <img src={tenth} alt="keyboard"/>
                <p>Know that identity theft can happen anywhere.</p>
            </div>
            <div class="eleventhgrid box">
            <img src={eleventh} alt="keyboard"/>
                <p>Strengthen your home network.</p>
            </div>
            <div class="twelvethgrid box">
            <img src={twelveth} alt="keyboard"/>
                <p>Know what to do if you become a victim.</p>
            </div>
        </div>
         <div className="ctrl"><br/></div>
        </div>
    )
}
export default Warnings
