import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Contact(){
  return (
    <header className="cover">
      <h1>This is some info!</h1>
      <p>Men without hats</p>
      <a href="#get-started" className="btn">Get Started</a>
    </header>
  );
}

export default Contact;