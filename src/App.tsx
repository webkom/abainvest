import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import FrontPage from "./pages/frontPage/index.tsx";
import About from './aboutUs/index.tsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default App
