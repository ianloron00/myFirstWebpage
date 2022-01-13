// https://www.youtube.com/watch?v=I2UBjN5ER4s&t=659s

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home}/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
