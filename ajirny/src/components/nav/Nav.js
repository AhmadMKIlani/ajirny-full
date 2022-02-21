import React, { useState, useEffect } from 'react';
import logo from './logo.png'
import "./Nav.css";
import { Outlet, NavLink } from "react-router-dom";


export const Nav = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('current-user'))) {
      setLogout(true);
      setCurrentUser(() => JSON.parse(localStorage.getItem('current-user'))['name']);
    } else {
      setLogout(false);
    }
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('current-user');
    setLogout(false);
  }
  return (
    <div>
       <header class="header">
        <NavLink to='/' class="logo"> <img src={logo} /> </NavLink>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><NavLink to='/categories'> Categories </NavLink></li>
            <li><NavLink to='/about'> About </NavLink></li>
            <li><NavLink to='/singlepage'> Single </NavLink></li>
            <li><NavLink to='/contact'> Contact </NavLink></li>
            { !logout &&
              <><li><NavLink to='/login'> Login </NavLink></li>
            <li><NavLink to='/registration'> Register </NavLink></li></>
            }
            {logout && <>
            <li><NavLink to ='/userprofile'>{currentUser}</NavLink></li>
            <li onClick={handleLogout}><NavLink to ='/'>logout</NavLink></li>
            </>}
        </ul>
      </header>
      <Outlet />
    </div>
  )
}
