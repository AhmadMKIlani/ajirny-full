import React, { useState, useEffect } from 'react';
import logo from './logo.png'
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";


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
        <Link to='/' class="logo"> <img src={logo} /> </Link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><Link to='/categories'> Categories </Link></li>
            <li><Link to='/about'> About </Link></li>
            <li><Link to='/singlepage'> Single </Link></li>
            <li><Link to='/contact'> Contact </Link></li>
            { !logout &&
              <><li><Link to='/login'> Login </Link></li>
            <li><Link to='/registration'> Register </Link></li></>
            }
            {logout && <>
            <li><Link to ='/userprofile'>{currentUser}</Link></li>
            <li onClick={handleLogout}><Link to ='/'>logout</Link></li>
            </>}
        </ul>
      </header>
      <Outlet />
    </div>
  )
}
