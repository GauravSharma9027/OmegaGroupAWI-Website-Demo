import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
const App = () => {
  return (
    <div>
      <BrowserRouter  basename="/vendor">
        <Routes>
          <Route path="/" element={<MainLayout />} >
            {/* Define your routes here */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
