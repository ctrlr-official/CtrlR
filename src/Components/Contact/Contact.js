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
                        <img src = {back} alt="back"/>
                        </Link>
                </div>
        <div className="iconchiki">
           <div className="insta">
               <Link className="instalink>
                 <img src = {back} alt="insta"/>
               </Link>
           </div>
           <div className="fb">
               <Link className="fblink>
                 <img src = {back} alt="fb"/>
               </Link>
           </div>
        </div>
            <div className="newpageik">Have some questions?<br/> Need a help?<br/> Contact Us</div>
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
                <img src={logo} alt="logo"/>
                </form>
            </div>
            
            </div>
    )
}

export default Contact
