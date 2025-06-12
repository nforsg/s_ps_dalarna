import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NotFoundPage(){
  return (
    <header className="cover">
      <h1>The page was not found</h1>
    </header>
  );
}

export default NotFoundPage;