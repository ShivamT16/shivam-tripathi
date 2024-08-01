import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <div>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contact</NavLink>
        </div>
    )
}