import React from "react";

function About() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="heading">
                <h1>About Me</h1>
            </div>
            <div className="content">
                <p>
                I'm Anushka Khatri, a dedicated Web Developer with a strong command over the MERN stack and a keen eye for crafting efficient and visually appealing web applications. My approach to development is driven by a passion for building seamless, scalable, and intuitive digital solutions.
                </p>
                <p>
                I have experience working across various aspects of web development, from designing interactive frontend interfaces to implementing robust backend logic. My curiosity keeps me updated with emerging technologies, ensuring that I create modern and high-performing applications.
                </p>
                <p>
                I thrive in dynamic environments where I can collaborate, problem-solve, and contribute meaningfully to projects. I am always eager to take on new challenges that push my creativity and technical expertise.
                </p>
                <p>
                Currently, I am looking for internship and full-time opportunities to apply my skills, grow as a developer, and contribute to impactful projects. Let’s connect and create something great together!
                </p>
                <div className="btnGrp">
                    <a href="#myWorks" className="btn">View Works</a>
                    <a href="https://github.com/anushkakhatri04" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
                </div>
            </div>
        </div>
    );
}

export default About;
