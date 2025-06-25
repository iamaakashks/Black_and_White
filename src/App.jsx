import React, { useState } from 'react'
import { Header } from '../components/Header.jsx'

function App() {
  const [count, setcount] = useState(0);
  function post() {
    setcount(prev => prev+1)
    console.log("hello count: " + count);
  }
  const day = 30;
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white px-16 pt-6">
      <Header />
      <br />
      <div className='w-full bg-zinc-700 flex items-center gap-4'>
        <div className={`w-40 h-40 border-[1px] border-zinc-900 rounded-md ${count&&'bg-green-600'}`}></div>
        <button onClick={post} className="px-3 py-1.5 border-[1px] rounded-md">Post {count}</button>
      </div>
    </div>
  )
}
export default App;