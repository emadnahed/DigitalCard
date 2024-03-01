import React from "react";
import { Link, Outlet } from "react-router-dom";
import imgr from '../assets/digitalisation.png'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={imgr} alt="Digital Card Maker" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link style={{  fontFamily:'Copperplate', textDecoration: 'none' }} to="/samplecard">Check Sample</Link>
          </li>
        </ul>        
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
