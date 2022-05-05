import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reference from './components/pages/Reference';
import Environment from './components/pages/Environment';
import Econ from './components/pages/Econ';
import Conclusion from './components/pages/Conclusion';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Environment' element={<Environment/>} />
          <Route path='/Reference' element={<Reference/>} />
          <Route path='/Econ' element={<Econ/>} />
          <Route path='/Conclusion' element={<Conclusion/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
