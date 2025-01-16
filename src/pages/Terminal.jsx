import React, { useRef, useState, useEffect, useLocation } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../css/Terminal.css";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
function Terminal() {
    const getAsciiArt = () => {
        return `▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌
▐                                                             ▌
▐  __  __   ______  __      __      __  __                    ▌
▐ /\\ \\/ /  /\\  ___\\/\\ \\    /\\ \\    /\\ \\_\\ \\                   ▌
▐ \\ \\  _"-.\\ \\  __ \\ \\ \\___\\ \\ \\___\\ \\____ \\                  ▌
▐  \\ \\_\\ \\_\\\\ \\_____\\ \\_____\\ \\_____\\/\\_____\\                 ▌
▐  ______/___________________\\/_____________/  __  ______     ▌
▐ /\\  ___\\/\\  ___\\/\\  __ \\/\\ \\/\\ \\/\\  ___\\    /\\ \\/\\  __ \\    ▌
▐ \\ \\  __\\  \\___  \\ \\ \\/\\_\\ \\ \\_\\ \\ \\  __\\   _\\_\\ \\ \\ \\/\\ \\   ▌
▐  \\ \\_____\\/\\_____\\ \\___\\_\\ \\_____\\ \\_____\\/\\_____\\ \\_____\\  ▌
▐   \\/_____/\\/_____/\\/___/_/\\/_____/\\/_____/\\/_____/\\/_____/  ▌
▐                                                             ▌
▐                                                             ▌
▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌`;
    };
    const asciiArt = getAsciiArt();

    const [inputVal, setInputVal] = useState("");

    // Handles every change typed or deleted in the input field
    // Ensurse inputVal state is in sync with the input value
    // best practices for form handling
    // makes the component controlled

    const handleInputChange = (event) => {
        setInputVal(event.target.value);
        console.log(inputVal);
    };

    // Handle when user presses Enter in the text input field
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // Perform actions when the Enter key is pressed
            console.log("User pressed Enter:", inputVal);
            setInputVal(""); // Clear the input field if needed
        }
    };

    // Get the terminal input value
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    // When window is active/clicked on, focus on the input text
    const handleDivClick = () => {
        inputRef.current && inputRef.current.focus();
    };

    useEffect(() => {
        document.addEventListener("click", handleDivClick);
        return () => {
            document.removeEventListener("click", handleDivClick);
        };
    }, [containerRef]);

    return (
        <div className="terminal-container">
            <div className="terminal-content" ref={containerRef}>
                <pre>{asciiArt}</pre>
                <div className="terminal-line">
                    <span className="prompt">C:\Users\KellyEsquejo&gt;</span>
                    <span className="terminal-output choices">Choices:</span>
                </div>
                <div className="terminal-line">
                    <span className="prompt">C:\Users\KellyEsquejo&gt;</span>
                    <input
                        ref={inputRef}
                        value={inputVal}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        type="text"
                        className="terminal-input"
                    />
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
    /* <div className="terminal-header">
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
</div> */
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
{
    /* <nav>
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
                                    // onClick={handleProjectPageClick}
                                >
                                    <span className="text">Projects</span>
                                </Link>
                            </li>
                        </ul>
                    </nav> */
}
{
    /* <div className="terminal-content-inner">
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </div> */
}
