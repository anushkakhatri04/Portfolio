import React from "react";

function Navbar() {
    return(
        <nav>
                <div class="logo"><h1><b>MY PORTFOLIO</b></h1></div>
                <ul className="nav-links">
                    <li><a href="#homepage" className="home">Home</a></li>
                    <li><a href="#aboutMe" className="about">About me</a></li>
                    <li><a href="#portfolio" className="portfolio">Portolio</a></li>
                    <li><a href="#myWorks" className="works">My Works</a></li>
                    <li><a href="#contactMe" className="contact">Contact</a></li>
                    <i class="fa-solid fa-bars"></i>
                </ul>
            </nav>
    );
}

export default Navbar;