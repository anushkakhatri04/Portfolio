import React from "react";

function About() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="heading">
                <h1>About Me</h1>
            </div>
            <div className="content">
                <p>
                    Greetings! I am Anushka Khatri, a proud BCA graduate and a passionate Web Developer specializing in the MERN stack. My expertise lies in creating modern, responsive, and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.
                    <br />
                    <br />
                    I am eager to expand my knowledge in areas like advanced backend development, cloud computing, and AI-driven web solutions. Staying updated with the latest technologies and continuously learning is my driving force. My goal is to contribute to innovative projects while refining my skills further.
                    <br />
                    <br />
                    Beyond coding, I thrive in collaborative environments where I can brainstorm ideas and solve complex problems with creative solutions. I am enthusiastic about working with forward-thinking teams and am actively seeking opportunities for internships or full-time roles where I can grow while adding value to your projects.
                </p>
                <div className="btnGrp">
                    <button className="btn">View Works</button>
                    <button className="btn">Github</button>
                </div>
            </div>
        </div>
    );
}

export default About;
