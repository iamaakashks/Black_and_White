import React from "react";
import {Header} from './Header.jsx'
import {Tracker} from './Tracker.jsx'
import { About } from "./About.jsx";
import Footer from "./Footer.jsx";

export function Home() {
    return (
        <div className="w-full min-h-screen bg-zinc-900 text-white px-16 pt-6">
            <Header />
            <br />
            <Tracker />
            <br/>
            <About />
            <br/>
            <Footer />
        </div>
    )
}