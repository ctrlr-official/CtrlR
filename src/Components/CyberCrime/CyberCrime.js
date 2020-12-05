import React from 'react';
import './CyberCrime.css'
import cat from '../../assets/Asset1.png'
// import back from '../../assets/back.png'
import { Link } from 'react-router-dom';

const CyberCrime = () => {
    console.log("Heeey")
    return (
        <div className='CyberCrime'>
            <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        &#8592
                        </Link>
                </div>
            <div className="firstvideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xpxDPBEWokE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="myframeone"></iframe>
            </div>
            <div className="secondvideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mn-Y33AU4aI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="myframetwo"></iframe>
            </div>
            <div className="secondcat">
                <img src={cat} alt="catik"/>
            </div>
        </div>
    )
}
export default CyberCrime
