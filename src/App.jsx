import React from 'react'
import { Home } from '../components/Home.jsx'
import { Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup.jsx';
import { NotAvailable } from '../components/NotAvailable.jsx';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotAvailable />} />
          <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}
export default App;