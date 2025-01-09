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
                        <h5><u>Wanderlust</u></h5>
                        <p>Wanderlust is a user-friendly platform where individuals can list their properties and explore others for unique travel experiences.</p>
                        <button type="button" class="btn sub-btn" ><a 
                        href="https://workingwanderlust.onrender.com/listings" 
                        target="_blank" >View Live</a></button>
                    </div>
                </div>
                <div className='workCard-2 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>Spotify Clone</u></h5>
                        <p>A sleek Spotify Clone built with just HTML and CSS, featuring a visually appealing interface that mimics the original platform's design.</p>
                        <button type="button" class="btn sub-btn"><a 
                        href="https://github.com/anushkakhatri04/spotifyClone" 
                        target="_blank">Github</a></button>
                    </div>
                </div>
                <div className='workCard-3 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>Amazon Clone</u></h5>
                        <p>An Amazon Clone built with HTML and CSS, showcasing a visually appealing layout that mimics the original website's design.</p>
                        <button type="button" class="btn sub-btn"><a 
                        href="https://github.com/anushkakhatri04/Amazon-Clone" 
                        target="_blank">Github</a></button>
                    </div>
                </div>
                <div className='workCard-4 card-box'>
                    <div className='inner-sub-container'>
                        <h5><u>Todo App</u></h5>
                        <p>Stay organized with this simple To-Do app! Built using basic HTML, CSS, and JavaScript, it helps you efficiently manage tasks and keep track of your daily goals.</p>
                        <button type="button" class="btn sub-btn">  <a 
                        href="https://github.com/anushkakhatri04/todoApp" 
                        target="_blank">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Projects;