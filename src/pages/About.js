import React from 'react'
import wcsLogo from "../media/wcsindia_logo.jpg"
import neogLogo from "../media/neoGlogo.png"
import synexooLogo from "../media/synexoo_logo.png"
import gbuLogo from "../media/gbuLogo.png"
import { Link } from 'react-router-dom'
import "./styles.css"

export const About = () => {
  return (
    <div className='about-main'>
    <h1 className='about-heading'>Experience</h1>

    <div className='exp-card' >
     <div style={{display: "flex"}}>
        <img className='card-img' src={synexooLogo} alt="comapny" />
        <div className='card-detail'>
            <h2>Frontend Development Intern</h2>
            <p>Synexoo, Noida</p>
            <p>June 2024 – July 2024</p>
        </div>
     </div>
     
       <p style={{lineHeight: "2rem"}} >
        <li>Optimized user authentication and search functionality for an e-commerce project.</li>
        <li>Assisted in designing user interfaces for web and mobile applications, enhancing digital
        products' visual appeal and functionality.</li>
        <li>Collaborated with the design team to conduct user research, improving UI/UX design
        experience by addressing key pain points.</li>
       </p>   
    </div>

    <div className='exp-card1'>
     <div style={{display: "flex"}}>
       <img className='card-img' src={neogLogo} alt="comapny" />
       <div className='card-detail'>
        <h2>Frontend (React) Skill Development Boot Camp</h2>
        <p>NeoG Camp </p>
        <p>Oct 2023 – Apr 2024</p>
       </div>
     </div>
     
     <p>
       <li>Completed 5 <Link to="/projects" > projects</Link> in HTML, CSS, React, Redux, JavaScript, TypeScript</li>
     </p>   
    </div>

    <div className='exp-card'>
        <div style={{display: "flex"}}>
            <img className='card-img' src={wcsLogo} alt="comapny" />
            <div className='card-detail'>
                <h2>Technical Support Engineer</h2>
                <p>WCS India Private Limited, Gurugram</p>
                <p>Aug 2022 – Sept 2023</p>
            </div>
        </div>
     
      <p style={{lineHeight: "2rem"}}>
       <li>Served as the primary point of contact for internal office employees regarding IT support.</li>
       <li>Provided technical support to clients regarding PBXs and telephony systems.</li>
      </p>   
    </div>

    <h1 className='about-heading'>Education </h1>

    <div className='exp-card1'>
     <div style={{display: "flex"}}>
       <img className='card-img' src={gbuLogo} alt="comapny" />
       <div className='card-detail'>
        <h3>Bachelor of Technology</h3>
        <p>Gautam Buddha University, Greater Noida </p>
        <p>Aug 2018 – June 2022</p> 
        <p> CGPA- 7.80 </p>
       </div>
     </div>
      
    </div>
    
    </div>
  )
}
