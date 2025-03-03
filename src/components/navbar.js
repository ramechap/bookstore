
import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.jpg";
import { IoEarthOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import "../components/navbar.css"
export default function Navbar() {
    const location = useLocation();  // This will help track the current location

    useEffect(() => {
      console.log(window.location.href);  // Log current URL in console
    }, []);
    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
      };
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed">
      <div className='navbar-header'>
        <Link className="navbar-brand" to="#">
          <img src={logo} width={100} height={100} alt='nagrik-logo' />
          BookStore
        </Link>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${isActive("/")}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={`nav-item ${isActive("/aboutus")}`}>
            <Link className="nav-link" >About Us</Link>
          </li>
          <li className={`nav-item ${isActive("/allbooks")}`}>
            <Link className="nav-link" to="/allbooks" >All Books</Link>
          </li>
          <li className={`nav-item `}>
            <Link className="nav-link btn btn-outline-primary text-dark"  to="/signin">Login</Link>
          </li>
        
          <li className={`nav-item `}>
            <Link className="nav-link btn btn-primary text-white" to="/signup">Signup</Link>
          </li>
          
        </ul>
      </div>
    </nav>
            </>

    )
}
