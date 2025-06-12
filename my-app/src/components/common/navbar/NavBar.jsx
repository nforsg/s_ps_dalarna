import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return ( 
    <section className="navbar">
        <Link to="/" className='navbar-item'><p>Startsida</p></Link>
        <Link to="/about" className='navbar-item'><p>Psykoterapi</p></Link>
        <Link to="/contact" className='navbar-item'><p>Kontakt</p></Link>
    </section>
  );
}

export default NavBar;