import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./Footer.css"


function Footer () {

  return (
    <section className="footer">
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Hemsida gjord av Nils Forsgren
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            <p> forsgren@samterapidalarna.se</p>
          </section>
          <section className="footer-info__terms">
            <p>Copyright {'\u00A9'} All Rights Reserved</p>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            <p>070-699 12 05</p>
          </section>
        </section>
      </section>
    </section>
  )

}

export default Footer;