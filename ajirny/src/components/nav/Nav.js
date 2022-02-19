import React, { useState, useEffect } from 'react';

import "./Nav.css";
export const Nav = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [logout, setLogout] = useState(false);

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem('current-user'))){
      setLogout(true);
      setCurrentUser(()=>JSON.parse(localStorage.getItem('current-user'))['name']);
    }else{
      setLogout(false);
    }
  }, [])
  const handleLogout =()=>{
    localStorage.removeItem('current-user');
  }
  return (
    <div>
       <header className="header">
        <a href="*" className="logo">CSS Nav</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="*">{currentUser}</a></li>
          {logout && <li><a href="" onClick={handleLogout}>logout</a></li>}
        </ul>
        </header>
    </div>
  )
}
