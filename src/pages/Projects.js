import { Link } from "react-router-dom"

export const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <div>
                <p>Voice E-commerce</p>
                <p>An ecommerce platform for high quality audio gadgets</p>
            </div>
            <div>
                <p>Social Media</p>
                <p>A Twitter inspired social media platform</p>
            </div>
            <div>
                <p>Api Documentation</p>
                <p>API documentations bulid with tech like NodeJs and Express js</p>
            </div>
            <div>
                <p>Volunteer Management App</p>
                <p>A full Stack project</p>
            </div>
            <Link> More Projects... </Link>

            </div>
    )
}