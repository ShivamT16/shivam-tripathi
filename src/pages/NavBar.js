import { NavLink } from "react-router-dom"

export const Navbar = () => {
    
    return(
        <div className="navBar" >
            <NavLink className="navLink" >Home</NavLink>
            <NavLink className="navLink" >About</NavLink>
            <NavLink className="navLink" >Projects</NavLink>
            <NavLink className="navLink" >Contact</NavLink>
        </div>
    )
}