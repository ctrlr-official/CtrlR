import React from 'react';
import './Contact.css'
import logo from '../../assets/ctrlr.jpg'
import { Link } from 'react-router-dom';
import back from '../../assets/back.png';
import facebook from '../../assets/fbicon.png';
import instagram from '../../assets/insticon.png'


const Contact = () => {
    return (
        <div className="Contact">
            <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        <img src = {back} alt="back"/>
                        </Link>
                </div>
  
            <div className="newpageik">Have some questions?<br/> Need a help?<br/> Contact Us</div>
            <div className="formik">
                <form action="mailto:ctrlr.official@gmail.com" method="post" enctype="text/plain">
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
            
         <div className="iconchiki">
           <div className="insta">
               <button onClick={() => window.open( 'https://www.instagram.com/official_ctrlr/')}>
                 <img src = {instagram} alt="insta"/>
               </button>
           </div>
           <div className="fb">
               <button onClick={() => window.open( 'https://www.facebook.com/CTRL-R-104838324683087')}>
                 <img src = {facebook} alt="fb"/>
               </button>
           </div>
        </div>
            </div>
    )
}

export default Contact
