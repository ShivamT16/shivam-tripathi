import { NavLink } from "react-router-dom"

export const Navbar = () => {
    
    return(
        <div className="navBar" >
            <NavLink className="navLink" to="/" >Home</NavLink>
            <NavLink className="navLink" to="/about" >About</NavLink>
            <NavLink className="navLink" to="/projects" >Projects</NavLink>
            <NavLink className="navLink" to="/blogs" >Blogs</NavLink>
            <NavLink className="navLink" >Contact</NavLink>
        </div>
    )
}