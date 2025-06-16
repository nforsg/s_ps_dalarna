import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { Home, Contact, About, NotFoundPage } from './pages/common'
import { Header, Footer } from './components/common';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path= "*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
