// import { useState } from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import './components/Blue'
import './components/Red'
import Home from './components/Home'

function App() {
  return (
    <>
    <div id="container">
    {/* ========= NAVBAR ======= */}
    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/">Home</Link>
    </div>
    {/* ========= MAIN ========= */}
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<h1>Blue</h1>} />
        <Route path="/red" element={<h1>Red</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </div>
    </>
  )
}

export default App
