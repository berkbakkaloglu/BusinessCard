import React from "react";
import Footer from "./components/Footer"
import Interest from "./components/Interest"
import Info from "./components/Info"
import About from "./components/About"


export default function App() {
    return (
        <div className="container">
        <Info/>
        <About/>
        <Interest />
        <Footer />
        </div>
    )
}