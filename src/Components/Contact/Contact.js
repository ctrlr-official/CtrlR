import React from 'react';
import './Contact.css'
import logo from '../../assets/ctrlr.jpg'
import { Link } from 'react-router-dom';
import back from '../../assets/back.png'


const Contact = () => {
    return (
        <div className="Contact">
            <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        <img src = {back}/>
                        </Link>
                </div>
            <div className="newpageik">Send us message, if you want to get more information about cybercrime or you are a vicitim of cyberattacks :)</div>
            <div className="formik">
                <form action="mailto:mary.grigoryan.2019@inbox.ru" method="post" enctype="text/plain">
                <br/>
                <input type="text" name="name" placeholder="Name"/><br/>
                 <br/>
                <input type="text" name="mail" placeholder="Mail"/><br/>
                <br/>
                <input type="text" name="comment" size="50" placeholder="Comment" /><br/>
                <input type="submit" value="Send" id="submit"/> 
                <input type="reset" value="Reset" id="reset"/>
                <img src={logo}/>
                </form>
            </div>
            
            </div>
    )
}

export default Contact