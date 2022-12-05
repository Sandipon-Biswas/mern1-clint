import React from 'react'
import { NavLink } from 'react-router-dom';
import Style from "./Logo.module.css"
const Logo = () => {
    return (
        // <NavLink to="/" id="RouterNavLink"  className={Style.neon_text} > Logo </NavLink>
        <span  className={Style.neon_text} > Logo </span>
    )
}

export default Logo