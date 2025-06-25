import React, { useState } from 'react'
import { Home } from '../components/Home.jsx'
import { Route, Routes } from 'react-router-dom';
import { About } from '../components/About.jsx';
import { NotAvailable } from '../components/NotAvailable.jsx';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotAvailable />} />
          <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}
export default App;