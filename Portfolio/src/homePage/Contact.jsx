import React from "react";

function Contact() {
    return (
        <div className="contactMe" id="contactMe">
            <div className="content">
                <h2>Contact Me</h2>
                <p>
                    Got a project in mind, an exciting opportunity, or just want to drop a friendly hello?<br />
                    I’m all ears! Don’t hesitate to reach out through the form below or connect with me on LinkedIn or GitHub.<br />
                    Let’s team up and bring innovative ideas to life!
                </p>
            </div>
            <div className="formContainer">
                <form id="contactForm">
                    <div className="formGroup">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                            required 
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email" 
                            required 
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder="Your Phone Number" 
                            required 
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            placeholder="Your Message" 
                            required 
                        />
                    </div>
                    <div className="formGroup">
                        <button type="submit" className="btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;