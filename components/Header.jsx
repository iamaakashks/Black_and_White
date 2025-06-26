import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
      const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className='w-full flex items-center gap-10 text-md'>
            <h1 className='tracking-wider font-thin text-2xl'>Black&White</h1>
            <div className='bg-zinc-700 flex-1 flex justify-end gap-10 py-6 rounded-full px-10'>
            <Link to="/">Home</Link>
            <button>Schedule</button>
            <button>About</button>
            <button>Contact</button>
            </div>
            {
            loggedIn ? (
                <button className={``}>
                <span className='material-symbols-outlined'>account_circle</span>
                </button>
            ) : (
                <div className={`flex items-center gap-10 py-6`}>
                <button onClick={()=>setLoggedIn(true)} className=''>Login</button>
                <button>Signup</button>
                </div>
            )
            }
        </div>
    )
}