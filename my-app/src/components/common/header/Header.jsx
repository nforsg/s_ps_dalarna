import React  from "react";
import NavBar from "../navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./Header.css"

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <Link to="/" className="header-top__logo"><h1>Samtal & Psykoterapi i Dalarna AB</h1></Link>
                </section>
                <section className="header-top__navbar">
                    <NavBar />
                    <hr className="header-top__separator" />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__phone">
                    blablabla
                </section>
                <section className="header-bottOm__email">
                    HTIS IS AN EMAIL!!
                </section>
            </section>
        </section>
    )
}

export default Header;