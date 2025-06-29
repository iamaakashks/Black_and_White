import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='w-full min-h-screen bg-zinc-900 text-white flex justify-center items-center'>
            <div className='w-[30%] bg-zinc-700 rounded-md p-10 flex flex-col gap-6'>
                <h1 className='text-center text-2xl font-bold'>Welcome, Signup!</h1>
                <div className='w-full flex flex-col gap-4'>
                    <div className=''>
                        <label className='' htmlFor='email'>Email</label>
                        <input id="email" type='email' placeholder='Enter Email' className='py-1.5 px-2 outline-none border-[1px] border-zinc-900 rounded-md w-full' />
                    </div>
                    <div className=' '>
                        <label className='' htmlFor='pass'>Password</label>
                        <input id="pass" type='password' placeholder="Enter Password" className='py-1.5 px-2 outline-none border-[1px] border-zinc-900 rounded-md w-full' />
                    </div>
                    <button type='submit' className='px-3 py-1.5 rounded-md bg-zinc-900 hover:cursor-pointer  hover:bg-zinc-800 duration-500'>Register</button>
                </div>
                <div className='w-full flex justify-center gap-2'>
                    <h4>I have an existing account</h4>
                    <Link to='/login' className='underline hover:text-gray-300 hover:transition-all hover:duration-300'>Signin</Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;