import { Link } from "react-router-dom"
import "./project.css"
import voiceImg from "../media/voice.jpg"
import socialMedia from "../media/social-media.jpg"
import postMan from "../media/postman.png"
import volunteer from "../media/volunteer.jpg"
import projects from "../media/projects.jpg"
import { Navbar } from "./NavBar"

export const ProjectPage = () => {
    return(
        <div>
            <Navbar />
        <div className="project-Main">

            <h1 className="project-Heading" >Projects</h1>

            <div className="project-Cards">
            <div className="projectCard" >
                <img className="card-Image" src={voiceImg} alt="voiceImg" />
                <p className="card-title">Voice E-commerce</p>
                <p className="card-description">Welcome to our audio gadget store! Explore a wide range of headphones, earbuds, speakers, and more. 
                <br />Shop confidently and find the perfect audio solution for you.</p>
                <Link to="https://voice-e-commerce-cyan.vercel.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/Voice-Ecommerce" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={socialMedia} alt="voiceImg" />
                <p className="card-title">Social Media</p>
                <p className="card-description">A Twitter-inspired social media website with user feed, explore feed, and user profile sections.
                <br />      
                Excited to see how the users will interact with this platform!</p>
                <Link to="https://social-media-app-gold.vercel.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/social-media" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={volunteer} alt="voiceImg" />
                <p className="card-title">Volunteer Management App</p>
                <p className="card-description">The Volunteer Management Application simplifies recruiting, tracking, and engaging volunteers for various initiatives.</p>
                <Link to="https://volunteer-management-flame.vercel.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/volunteer-management-app" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={projects} alt="voiceImg" />
                <p className="card-title">Drop UI</p>
                <p className="card-description">A CSS component library</p>
                <Link to="https://drop-ui.vercel.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/Drop-UI" target="_blank" ><button>Code</button></Link>
            </div>
            </div>

            <h2 className="project-Heading" >API Documentation</h2>

            <div className="project-Cards">
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">Restaurant API Documentation</p>
                <p className="card-description">API documentations bulid with tech NodeJs and Express js</p>
                <Link to="https://documenter.getpostman.com/view/23427510/2sA35Bb3x9" target="_blank" ><button>Documentation</button></Link>
                <Link to="" target="_blank" ><button>Source Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">Travel Destination API Documentation</p>
                <p className="card-description">API documentations bulid with tech NodeJs and Express js</p>
                <Link to="https://documenter.getpostman.com/view/23427510/2sA35Bb3x5" target="_blank" ><button>Documentation</button></Link>
                <Link to="" target="_blank" ><button>Source Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">User API Documentation</p>
                <p className="card-description">API documentations bulid with tech NodeJs and Express js</p>
                <Link to="https://documenter.getpostman.com/view/23427510/2sA35Bb3x6" target="_blank" ><button>Documentation</button></Link>
                <Link to="" target="_blank" ><button>Source Code</button></Link>
            </div>
            </div>

            <h2 className="project-Heading" >NeoG Level Zero Projects</h2>

            <div className="project-Cards" >
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">Stocks: Profit or Loss</p>
                <p className="card-description">It is here you tell by how much you are in profit or loss with your stocks.</p>
                <Link to="https://stonks-pandl.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark14-profit-or-loss" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">Is Your Birthday Palindrome?</p>
                <p className="card-description">Here you can check if your birth date is a palindrome number or not and which palindrome date is nearest to your birthday as well as by how much you missed your Palindrome Birthday 😄 </p>
                <Link to="https://isbdaypalindromeon.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark13-is-birthday-palindrome" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">Fun with Triangles ◣◥ ◤◢</p>
                <p className="card-description">Here you can play with different angles and Triangle.Can play a quiz as well as can calculate hypotenuse and area of a triangle.</p>
                <Link to="https://fwtriangles.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/fun-with-triangles" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p className="card-title">Cash Register</p>
                <p className="card-description">Cash register lets you know the minimum amount of notes require to return the changes.</p>
                <Link to="https://cash-copy.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/cash-register-manager" target="_blank" ><button>Code</button></Link>
            </div>
            <Link className="projectCard" to="/projects/levelzero" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>More Projects</p>
                <p>Click to browse more NeoG projects</p>
            </Link>
            </div>

        </div>
        </div>
    )
}