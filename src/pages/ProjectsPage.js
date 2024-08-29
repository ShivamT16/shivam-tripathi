import { Link } from "react-router-dom"
import "./project.css"
import voiceImg from "../media/voice.jpg"
import socialMedia from "../media/social-media.jpg"
import postMan from "../media/postman.png"
import volunteer from "../media/volunteer.jpg"
import projects from "../media/projects.jpg"

export const ProjectPage = () => {
    return(
        <div className="project-Main">
            
            <h1 className="project-Heading" >Projects</h1>

            <div className="project-Cards">
            <Link className="projectCard" to="https://voice-e-commerce-cyan.vercel.app/" target="blank" >
                <img className="card-Image" src={voiceImg} alt="voiceImg" />
                <p>Voice E-commerce</p>
                <p>An ecommerce platform for high quality audio gadgets</p>
            </Link>
            <Link className="projectCard" to="https://social-media-app-gold.vercel.app/" target="blank" >
                <img className="card-Image" src={socialMedia} alt="voiceImg" />
                <p>Social Media</p>
                <p>A Twitter inspired social media platform</p>
            </Link>
            <Link className="projectCard" to="https://volunteer-management-flame.vercel.app/" target="blank" >
                <img className="card-Image" src={volunteer} alt="voiceImg" />
                <p>Volunteer Management App</p>
                <p>A full Stack project</p>
            </Link>
            <Link className="projectCard" to="https://drop-ui.vercel.app/" target="blank" >
                <img className="card-Image" src={projects} alt="voiceImg" />
                <p>Drop UI</p>
                <p>A CSS component library</p>
            </Link>
            </div>

            <h2 className="project-Heading" >API Documentation</h2>

            <div className="project-Cards">
            <Link className="projectCard" to="https://documenter.getpostman.com/view/23427510/2sA35Bb3x9" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Restaurant API Documentation</p>
                <p>API documentations bulid with tech like NodeJs and Express js</p>
            </Link>
            <Link className="projectCard" to="https://documenter.getpostman.com/view/23427510/2sA35Bb3x5" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Travel Destination API Documentation</p>
                <p>API documentations bulid with tech like NodeJs and Express js</p>
            </Link>
            <Link className="projectCard" to="https://documenter.getpostman.com/view/23427510/2sA35Bb3x6" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>User API Documentation</p>
                <p>API documentations bulid with tech like NodeJs and Express js</p>
            </Link>
            </div>

            <h2 className="project-Heading" >NeoG Level Zero Projects</h2>

            <div className="project-Cards" >
            <Link className="projectCard" to="https://stonks-pandl.netlify.app/" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Stocks: Profit or Loss</p>
                <p>It is here you tell by how much you are in profit or loss with your stocks.</p>
            </Link>
            <Link className="projectCard" to="https://isbdaypalindromeon.netlify.app/" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Is Your Birthday Palindrome?</p>
                <p>Here you can check if your birth date is a palindrome number or not and which palindrome date is nearest to your birthday as well as by how much you missed your Palindrome Birthday 😄 </p>
            </Link>
            <Link className="projectCard" to="https://fwtriangles.netlify.app/" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Fun with Triangles ◣◥ ◤◢</p>
                <p>Here you can play with different angles and Triangle.Can play a quiz as well as can calculate hypotenuse and area of a triangle.</p>
            </Link>
            <Link className="projectCard" to="https://cash-copy.netlify.app/" target="_blank" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Cash Register</p>
                <p>Cash register lets you know the minimum amount of notes require to return the changes.</p>
            </Link>
            <Link className="projectCard" to="/projects/levelzero" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>More Projects</p>
                <p>Click to browse more NeoG projects</p>
            </Link>
            </div>

        </div>
    )
}