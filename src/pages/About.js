import React from 'react'
import wcsLogo from "../media/wcsindia_logo.jpg"
import neogLogo from "../media/neoGlogo.png"
import synexooLogo from "../media/synexoo_logo.png"
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div style={{textAlign: "left"}}>
        <h1>Experience</h1>

    <div>
     <div style={{display: "flex"}}>
        <img style={{height: "5rem"}} src={synexooLogo} alt="comapny" />
        <div>
            <p>Frontend Development Intern</p>
            <p>Synexoo, Noida</p>
        </div>
     </div>
     <p>June 2024 – July 2024</p>
       <p>
        <li>Optimized user authentication and search functionality for an e-commerce project</li>
        <li>Assisted in designing user interfaces for web and mobile applications, enhancing digital
        products' visual appeal and functionality</li>
        <li>Collaborated with the design team to conduct user research, improving UI/UX design
        experience by addressing key pain points</li>
       </p>   
    </div>

    <div>
     <div style={{display: "flex"}}>
       <img style={{height: "5rem"}} src={neogLogo} alt="comapny" />
       <div>
        <p>Frontend (React) Skill Development Boot Camp</p>
        <p>NeoG Camp </p>
       </div>
     </div>
     <p>Oct 2023 – Apr 2024</p>
     <p>
       <li>Completed 5 <Link to="/projects" > projects</Link> in HTML, CSS, React, Redux, JavaScript, TypeScript</li>
     </p>   
    </div>

    <div>
        <div style={{display: "flex"}}>
            <img style={{height: "5rem"}} src={wcsLogo} alt="comapny" />
            <div>
                <p>Technical Support Engineer</p>
                <p>WCS India Private Limited, Gurugram</p>
            </div>
        </div>
     <p>Aug 2022 – Sept 2023</p>
      <p>
       <li>Served as the primary point of contact for internal office employees regarding IT support</li>
       <li>Provided technical support to clients regarding PBXs and telephony systems</li>
      </p>   
    </div>
    
    </div>
  )
}
