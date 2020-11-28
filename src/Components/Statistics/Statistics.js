import React from 'react';
import './Statistics.css'
import cyberedge from '../../assets/cyberedge.png'
import back from '../../assets/back.png'
import secondcat from '../../assets/secondcat2.gif'
import { Link } from 'react-router-dom';


 const Statistics = () =>{
     return(
         <div className="Statistics">
      <div className="newbtn">
                    <Link to="/"
                        className="norkochak">
                        <img src={back} alt="backic"/>
                        </Link>
                </div>
      <div className="paragraph"><p>Nowadays, cybercriminal activites are one of the dangerous issues, that can cause many other crimes. 
      According to these years, the rate of cybercrime increased a lot. Here are some facts about the impact and statistics of cybercrime
      <b><p>1.In the 2019 DBIR, 94% of malware was delivered by email.</p>
      <p>2.61% of organizations have experienced an IoT security incident.</p>
      <p>3.100,000 groups in at least 150 countries and more than 400,000 machines were infected by the Wannacry virus in 2017, at a total cost of around $4 billion.</p>
      <p>4.48% of malicious email attachments are office files.</p>
      <p>5.Over 60% of businesses experienced phishing and social engineering attacks in 2019.</p>
      <p>6.The biggest data breach of all-time compromised 3 billion accounts.</p>
      <p>7.One in five teenagers who use the internet have received an unwanted sexual soliciation.</p></b>
      In addition, the rate of cyber attack in Armenia is growing. While hacking has become a huge thing in the world throughout the years, there are many countries where people face the most cybercrime.</p>
      <div className="histogram">
      <img src={cyberedge} alt="cyberedge"/>
      </div>
      </div>
      <div className="animatedseccat">
      <img src={secondcat} alt="caaaaaaaat"/>
      </div>
      </div>
  
     )  
 }
 export default Statistics;
