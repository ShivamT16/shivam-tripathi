import devLogo from "../media/dev-image.jpeg"

export const Intro = () => {
    return(
        <div style={{display: "flex",justifyContent: "space-around", margin: "0rem 3rem"}}>
            <div style={{textAlign: "left"}}>
                <h1 style={{fontSize: "5rem"}}>Shivam Tripathi</h1>
                <h1 style={{color: "blueviolet",fontSize: "3rem"}}>Frontend Developer</h1>
                <p>Hi, I am Shivam Tripathi. I specialize in HTML, CSS, JavaScript, and ReactJS. I am passionate about creating scalable, high-performance web applications. I have developed dynamic projects such as e-commerce and social media websites to hone my skills. </p> 
                <p>I am currently looking for a Frontend developer role where I can utilize my technical skills, problem-solving abilities, and commitment to code quality to create meaningful user experiences. </p> 
                <p>Let's connect and discuss how we can collaborate to build something amazing!</p>
            </div>
            <img style={{height: "30rem", padding: "1rem"}} src={devLogo} alt="dev-logo" />
        </div>
    )
}