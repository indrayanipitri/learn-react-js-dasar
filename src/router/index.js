import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact"

function Router(props){
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
}

export default Router;