import React from "react";
import Navbar from "./Navbar"
import Hero from "./hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Homepage() {

    return (
        <div className="homepage">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
    );
}

export default Homepage;