import { Link } from "react-router-dom"
import postMan from "../media/postman.png"

export const LevelZero = () => {
    return (
        <div className="project-Cards" >
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
    )
}