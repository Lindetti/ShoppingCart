import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {

  return (
    <div className="wrapper">
    <Navbar/>
    <Home/>
    </div>
  )
}

export default App
