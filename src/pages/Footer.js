import { Link } from "react-router-dom"
import gmail from "../media/gmail.png"
import linkedIn from "../media/linkedIn.png"
import github from "../media/github.png"

export const Footer = () => {
    return(
     <div className="footer-main" >
        <h2 style={{fontSize: "2rem",marginLeft: "1rem" }} >Contact Shivam</h2>
       
       <div className="footer-links">
        <Link className="footer-Link">
        <img src={gmail} style={{height: "2.5rem"}} alt="gMail" /> shivamtripathi385@gmail.com
        </Link>

        <Link className="footer-Link" to="https://www.linkedin.com/in/shivam-tripathi16/" target="blank" > 
        <img src={linkedIn} style={{height: "2.5rem", borderRadius: ".5rem"}} alt="linkedIn" />linkedin.com/in/shivam-tripathi16/
        </Link>

        <Link className="footer-Link" to="https://github.com/ShivamT16" target="blank" >
        <img src={github} style={{height: "2.5rem", borderRadius: "3rem"}} alt="gitHub" />github.com/ShivamT16
        </Link>
        </div>

     </div>
    )
}