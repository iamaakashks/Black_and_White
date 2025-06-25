import React from 'react'
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white px-16 pt-6">
      <div className='w-full flex items-center gap-10 text-md'>
        <h1 className='tracking-wider font-thin text-2xl'>Black&White</h1>
        <div className='bg-zinc-700 flex-1 flex justify-end gap-10 py-6 rounded-full px-10'>
          <button>Home</button>
          <button>Schedule</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div className={`${!loggedIn? 'block' : 'hidden'} flex items-center gap-10 py-6`}>
          <button className=''>Login</button>
          <button>Button</button>
        </div>
        <button className={`${loggedIn? 'block' : 'hidden'}`}>
          <span className='material-symbols-outlined'>account_circle</span>
        </button>
      </div>
    </div>
  )
}
export default App;