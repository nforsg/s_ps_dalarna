import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home(){
  return (
    <div className="cover">
      <h1>Welcome to MySite</h1>
      <p>Your simple Go + React starter</p>
      <a href="#get-started" className="btn">Get Started</a>
    </div>
  );
}

export default Home;