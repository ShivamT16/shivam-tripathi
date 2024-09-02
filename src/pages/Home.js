import { Footer } from "./Footer"
import { Intro } from "./Intro"
import { Navbar } from "./NavBar"
// import { Navbar } from "./NavBar"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export const Home = () => {
    return(
        <div>
            <Navbar />
            <Intro />
            <Projects />
            <Skills />
            <Footer />
            
        </div>
    )
}