import { Footer } from "./Footer"
import { Intro } from "./Intro"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export const Home = () => {
    return(
        <div>

            <Intro />
            <Projects />
            <Skills />
            <Footer />
            
        </div>
    )
}