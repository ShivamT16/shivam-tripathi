import { Link } from "react-router-dom"
import postMan from "../media/postman.png"

export const LevelZero = () => {
    return (
        <div className="project-Main">
        <h2 className="project-Heading" >NeoG Level Zero Projects</h2>

        <div className="project-Cards" >
            <div className="projectCard">
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Stocks: Profit or Loss</p>
                <p>It is here you tell by how much you are in profit or loss with your stocks.</p>
                <Link to="https://stonks-pandl.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark14-profit-or-loss" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Is Your Birthday Palindrome?</p>
                <p>Here you can check if your birth date is a palindrome number or not and which palindrome date is nearest to your birthday as well as by how much you missed your Palindrome Birthday 😄 </p>
                <Link to="https://isbdaypalindromeon.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark13-is-birthday-palindrome" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Fun with Triangles ◣◥ ◤◢</p>
                <p>Here you can play with different angles and Triangle.Can play a quiz as well as can calculate hypotenuse and area of a triangle.</p>
                <Link to="https://fwtriangles.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/fun-with-triangles" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Cash Register</p>
                <p>Cash register lets you know the minimum amount of notes require to return the changes.</p>
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
    )
}