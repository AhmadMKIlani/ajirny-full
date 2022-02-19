import React from 'react'
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";


export const Nav = () => {
  return (
    <div>
       <header class="header">
        <Link to='/' class="logo"> Ajirny </Link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><Link to='/categories'> Categories </Link></li>
            <li><Link to='/about'> About </Link></li>
            <li><Link to='/contact'> Contact </Link></li>
            <li><Link to='/user'> User </Link></li>
            <li><Link to='/login'> Login </Link></li>
            <li><Link to='/register'> Register </Link></li>
        </ul>
        </header>
        <Outlet />
    </div>
  )
}
