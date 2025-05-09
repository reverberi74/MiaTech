import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PubblicLayout from './layouts/PubblicLayout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PubblicLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
