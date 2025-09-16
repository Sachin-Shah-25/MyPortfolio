import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Container from './Container.jsx'
import About from './Component/About'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
