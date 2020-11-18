import React from 'react';
import cyberedge from '../../assets/cyberedge.png'

 const Statistics = () =>{
     return(
         <div className="Statistics">
      <div className="paragraph"><p>Nowadays, cybercriminal activites are one of the dangerous issues, that can cause many other crimes. 
      According to these years, the rate of cybercrime increased a lot. Here are some facts about the impact and statistics of cybercrime
      1.In the 2019 DBIR, 94% of malware was delivered by emai
      2.61% of organizations have experienced an IoT security incident
      3.100,000 groups in at least 150 countries and more than 400,000 machines were infected by the Wannacry virus in 2017, at a total cost of around $4 billion. 
      4.48% of malicious email attachments are office files.
      In addition, the rate of cyber attack in Armenia is growing. While hacking has become a huge thing in the world throughout the years, there are many countries where people face the most cybercrime.</p></div>
      <div className="histogram">
      <img src={cyberedge}/>
      </div>
      </div>
  
     )  
 }
 export default Statistics;
