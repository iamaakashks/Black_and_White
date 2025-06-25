import React from 'react'
import { Link } from 'react-router-dom'

export function NotAvailable() {
    return (
        <div className='w-full h-screen bg-zinc-900 text-white flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-4xl'>Page Not Available</h1>
            <Link className='underline' to="/">Home</Link>
        </div>
    )
}