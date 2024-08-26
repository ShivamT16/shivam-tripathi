import { Link } from "react-router-dom"
import "./project.css"
import voiceImg from "../media/voice.jpg"
import socialMedia from "../media/social-media.jpg"
import postMan from "../media/postman.png"
import volunteer from "../media/volunteer.jpg"
import projects from "../media/projects.jpg"

export const Projects = () => {
    return(
        <div className="project-Main" >
            <h1 className="project-Heading" >Projects</h1>

            <div className="project-Cards">
            <Link className="projectCard" to="https://voice-e-commerce-cyan.vercel.app/" target="_blank" >
                <img className="card-Image" src={voiceImg} alt="voiceImg" />
                <p>Voice E-commerce</p>
                <p>An ecommerce platform for high quality audio gadgets</p>
            </Link>
            <Link className="projectCard" to="https://social-media-app-gold.vercel.app/" target="_blank" >
                <img className="card-Image" src={socialMedia} alt="voiceImg" />
                <p>Social Media</p>
                <p>A Twitter inspired social media platform</p>
            </Link>
            <Link className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Api Documentation</p>
                <p>API documentations bulid with tech like NodeJs and Express js</p>
            </Link>
            <Link className="projectCard" to="https://volunteer-management-flame.vercel.app/" target="_blank" >
                <img className="card-Image" src={volunteer} alt="voiceImg" />
                <p>Volunteer Management App</p>
                <p>A full Stack project</p>
            </Link>
            <Link className="projectCard" to="/projects" >
                <img className="card-Image" src={projects} alt="voiceImg" />
                <p>More Projects</p>
                <p>Click to browse more projects</p>
            </Link>
            </div>
            
            </div>
    )
}