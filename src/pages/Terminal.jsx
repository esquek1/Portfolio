import React, { useState, useEffect, useLocation } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../css/Terminal.css";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function Terminal() {
    const [isMinimized, setIsMinimized] = useState(false); // Use the prop to set initial state
    const [isMaximized, setIsMaximized] = useState(false);
    const [isWindowClosed, setIsWindowClosed] = useState(false);
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleProjectPageClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        setIsMinimized(true); // Minimize the terminal

        // Navigate after state update
        navigate("/projects");
    };
    // Close terminal when red button is clicked
    const handleRedButtonClick = () => {
        setIsWindowClosed(true); // Set window closed state
    };

    // Toggle minimization when yellow button is clicked
    const handleYellowButtonClick = () => {
        setIsMinimized(!isMinimized);
    };

    // Toggle maximization when green button is clicked
    const handleGreenButtonClick = () => {
        setIsMaximized(!isMaximized);
    };

    // If the terminal is closed, return null to stop rendering it
    if (isWindowClosed) {
        return null;
    }

    return (
        <div className="terminal-container">
            <div
                className={`terminal-content ${isMaximized ? "large" : ""} ${
                    isMinimized ? "minimized" : ""
                }`}>
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <div
                            className="button red"
                            onClick={handleRedButtonClick}></div>
                        <div
                            className="button yellow"
                            onClick={handleYellowButtonClick}></div>
                        <div
                            className="button green"
                            onClick={handleGreenButtonClick}></div>
                    </div>
                    <span className="terminal-title">Terminal</span>
                </div>
                <div className="terminal-body">
                    <div className="terminal-line">
                        <span className="prompt">
                            C:\Users\KellyEsquejo&gt;
                        </span>
                        <span className="output choices">Choices:</span>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/">
                                    <span className="text">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">
                                    <span className="text">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">
                                    <span className="text">Contact</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projects"
                                    onClick={handleProjectPageClick}>
                                    <span className="text">Projects</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="terminal-content-inner">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
{
    /* <span className="command">~/Portfolio $</span> */
}
{
    /* <div className="terminal-body">
                    <div className="terminal-line">
                        <span className="prompt">
                            C:\Users\KellyEsquejo&gt;
                        </span>

                        <span className="output"> Hello, I'm Kelly</span>
                    </div>
                    <div className="terminal-line">
                        <span className="output">
                            I am a Software Developer
                        </span>
                    </div>
                </div> */
}
