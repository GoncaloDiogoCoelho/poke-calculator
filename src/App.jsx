// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/NavBar/Navbar";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import PokeBowl from "./pages/PokeBowl";
import About from './pages/About';
import Ingredients from "./pages/Ingredients";
import Bowls from './pages/Bowls';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokeBowl />}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/ingredients" element={<Ingredients />}/>
          <Route path="/bowls" element={<Bowls />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
