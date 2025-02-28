import React from "react";

function Projects() {
    return (
        <div className="myWorks" id="myWorks">
            <div className="heading">
                <h1>My Works</h1>
            </div>
            <div className='workCard-Container'>
            <div className='sub-Container'>
                <div className='workCard-1 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>VibeConnect</u></h5>
                        <p>VibeConnect is a real-time video conferencing platform enabling seamless virtual communication. Built with a focus on high-quality video streaming, secure authentication, and an intuitive user interface, it offers features like screen sharing, chat functionality, and meeting scheduling. Designed for efficiency and scalability, VibeConnect ensures smooth and reliable online interactions.</p>
                        <button type="button" className="btn sub-btn" ><a 
                        href="https://vibeconnect-frontend-fcl0.onrender.com" 
                        target="_blank" rel="noreferrer" >View Live</a></button>
                    </div>
                </div>
                <div className='workCard-2 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>Wanderlust</u></h5>
                        <p>Wanderlust is a user-friendly platform where individuals can list their properties and explore others for unique travel experiences.</p>
                        <button type="button" className="btn sub-btn"><a 
                        href="https://workingwanderlust.onrender.com/listings"
                        target="_blank" rel="noreferrer">View Live</a></button>
                    </div>
                </div>
                <div className='workCard-3 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>Trading App</u></h5>
                        <p>This is a trading app built with the MERN stack, featuring signup and login functionality. A Zerodha clone, it provides a platform for users to manage their trades and investments seamlessly.</p>
                        <button type="button" className="btn sub-btn"><a 
                        href="https://frontend-trading-app.vercel.app" 
                        target="_blank" rel="noreferrer">View Live</a></button>
                    </div>
                </div>
                <div className='workCard-4 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>Weather App</u></h5>
                        <p>This weather app is built with React and Material UI, offering a sleek and responsive design. It fetches real-time weather data through APIs, allowing users to stay updated on weather conditions effortlessly.</p>
                        <button type="button" className="btn sub-btn">  <a 
                        href="https://github.com/anushkakhatri04/WeatherApp" 
                        target="_blank" rel="noreferrer">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Projects;