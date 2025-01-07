import React from "react";
import "../css/about.css";
function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* <div className="about-headline">Kelly Esquejo</div> */}
                <div className="about-description">
                    Hello! My name is Kelly. I am a Junior Software Engineer.
                </div>
                <div className="about-skills">
                    <h3>Here are a few technologies I&#39;ve worked with:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>C++</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
