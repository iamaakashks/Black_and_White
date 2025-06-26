import { useState } from "react";
export function Tracker() {
    const [count, setcount] = useState(0);
    const greenShades = [
        'bg-green-400',
        'bg-green-600',
        'bg-green-800',
    ]
    function post() {
        setcount(prev => prev+1)
        console.log("hello count: " + count);
    }
    return (
        <div className='w-full bg-zinc-700 flex-col items-center gap-4'>
            <h1>Daily Activity Tracker</h1>
            <div className={`w-40 h-40 border-[1px] border-zinc-900 rounded-md ${count>0&& `${greenShades[0]} ${count>2&& `${greenShades[1]} ${count>4 && greenShades[2]}`}`}`}></div>
            <button onClick={post} className="px-3 py-1.5 border-[1px] rounded-md">Post {count}</button>
        </div>
    )
}