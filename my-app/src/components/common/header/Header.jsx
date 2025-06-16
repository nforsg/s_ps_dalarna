import React  from "react";
import NavBar from "../navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./Header.css"

function Header () {
    return (
        <section className="header">
                <section className="header-top">
                <Link to="/" className="header-top__logo">
                    <h1>Samtal & Psykoterapi i Dalarna AB</h1>
                </Link>
                <Link to="/contact"  className="header-top__name">
                    <p>Ann-Christine Forsgren</p>
                </Link>
                <a
                href="https://commons.wikimedia.org/w/index.php?title=User:Vivo&rdfrom=commons:User:V-wolf"
                target="_blank"
                rel="noopener noreferrer"
                className="header-top__photo"
                >
                <p>Foto: Calle Eklund</p>
                </a>
                </section>
                <section className="header-bottom">
                    <NavBar />
                </section>
        </section>
    )
}

export default Header;