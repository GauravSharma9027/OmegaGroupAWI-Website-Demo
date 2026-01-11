import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
const App = () => {
  return (
    <div>
      <BrowserRouter  basename="/website">
        <Routes>
          <Route path="/" element={<MainLayout />} >
            {/* Define your routes here */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
