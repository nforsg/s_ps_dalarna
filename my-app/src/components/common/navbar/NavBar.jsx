import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SvgIcon from '@mui/material/SvgIcon';
import MenuIcon from '@mui/icons-material/Menu';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="hamburger" onClick={toggleMenu}>
          <MenuIcon/>
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
        <Link to="/" className='navbar-item' onClick={() => setIsOpen(false)}><p>Startsida</p></Link>
        <Link to="/about" className='navbar-item' onClick={() => setIsOpen(false)}><p>Psykoterapi</p></Link>
        <Link to="/contact" className='navbar-item' onClick={() => setIsOpen(false)}><p>Kontakt</p></Link>
      </div>
    </nav>
  );
}

export default NavBar;
