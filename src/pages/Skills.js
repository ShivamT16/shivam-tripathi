import html from "../media/html.png"
import css from "../media/css3.png"
import jS from "../media/javaScript.png"
import react from "../media/reactIcon.png"
import redux from "../media/redux.png"
import nodejs from "../media/nodeJs.png"
import express from "../media/expressJs.png"
import mongoDB from "../media/mongoDB.png"
import github from "../media/github.png"

export const Skills = () => {
    return(
        <div className="skill-Main" >
            <h1> Skills </h1>
        <div className="skills-Card" >
        
         <div>
            <img className="skill-card" src={html} alt="" /> <p>Html</p>  </div>
         <div>
            <img className="skill-card" src={css} alt="" /> <p>CSS</p>  </div>
         <div>
            <img className="skill-card" src={jS} alt="" /> <p>JavaScript</p>  </div>
         <div>
            <img className="skill-card" src={react} alt="" /> <p>React</p>  </div>
         <div>
            <img className="skill-card" src={redux} alt="" /> <p>Redux</p>  </div>
         <div>
            <img className="skill-card" src={nodejs} alt="" /> <p>NodeJs</p>  </div>
         <div>
            <img className="skill-card" src={express} alt="" /> <p>ExpressJs</p>  </div>
         <div>
            <img className="skill-card" src={mongoDB} alt="" /> <p>MongoDB</p>  </div>
         <div>
            <img className="skill-card" src={github} alt="" /> <p>GitHub</p>  </div>
                    
         </div>    
        </div>
    )
}