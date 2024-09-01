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
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Birthday: Lucky or Not</p>
                <p>User can see whether his/her birthday is lucky or not for them just by putting their date of birth and lucky number.This is completely for fun purpose and doesn't relate to any astrology 😄</p>
                <Link to="https://bday-lon.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark11-birthday-lucky-or-not" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Music Mania</p>
                <p>A Good Listener? Here are some best music recommendations varies upto 3 genre.</p>
                <Link to="https://6u2dli.csb.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark9-music-mania" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Emoji Interpreter</p>
                <p>Here's your emoji directory, where you can search any emoji and you get to know what your emoji mean. Try now and know your emojis 😉 </p>
                <Link to="https://i8kx66-3000.preview.csb.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/emoji-interpreter" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Ferb Tranlation</p>
                <p>This site let's you talk in language of famous cartoon character Ferb by translating your english sentences into Ferb-Latin.</p>
                <Link to="https://phineas-ferb.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/ferb-translation" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Bananaa Talkk</p>
                <p>Are you Minion fan? This site lets you talk in their language by translating english to banana talk.</p>
                <Link to="https://talk-banaanaaa.netlify.app/" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/neogcamp-banana-talk" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Ramayan</p>
                <p>This is a CLI based Quiz on RAMAYAN. It will ask some questions and show the scores based on input answers.</p>
                <Link to="https://replit.com/@ShivamTripath13/mark2-CLI?embed=1&output=1" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark2-CLI" target="_blank" ><button>Code</button></Link>
            </div>
            <div className="projectCard" >
                <img className="card-Image" src={postMan} alt="voiceImg" />
                <p>Do You Know Me?</p>
                <p>About This is a CLI based Fun-Quiz on Shivam. Asks some questions and show them their score based on their answers</p>
                <Link to="https://replit.com/@ShivamTripath13/mark1-CLI?embed=1&output=1" target="_blank" ><button>Live</button></Link>
                <Link to="https://github.com/ShivamT16/mark1-CLI" target="_blank" ><button>Code</button></Link>
            </div>

            </div>
    </div>
    )
}