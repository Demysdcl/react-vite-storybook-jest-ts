import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './modules/About'
import Counter from './modules/Counter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
