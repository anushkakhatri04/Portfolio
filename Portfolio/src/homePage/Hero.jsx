import React from "react";

function Hero() {

    return (
        <div className="infoContainer">
            <div className="info">
                <h5>HELLO</h5>
                <span><h1>I'm Anushka Khatri</h1></span>
                <h3>Web Developer</h3>
                <button className="btn" id="hireMeBtn" onClick={() => document.getElementById("contactMe").scrollIntoView({ behavior: "smooth" })}>HIRE ME</button>
            </div>
            <div className="pic"><img src="pic.png"></img></div>
        </div>
    );
}

export default Hero;