import React, { useRef, useState, useEffect, useLocation } from "react";
import "../css/Terminal.css";

const COMMANDS = [
    { cmd: "-about", desc: "About Me" },
    { cmd: "-clear", desc: "Clear terminal" },
    { cmd: "-contact", desc: "Display contact information" },
    { cmd: "-help", desc: "Show available commands" },
    { cmd: "-projects", desc: "Show projects I have worked on" },
];
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

    const [terminalOutput, setTerminalOutput] = useState([]);

    // Handle when user presses Enter in the text input field
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // Verify if the input matches any of the possible commands
            const inputCmd = inputVal.trim();
            const command = COMMANDS.find((cmd) => cmd.cmd === inputCmd);

            if (inputCmd === "-help") {
                // Show all commands and descriptions for -help
                const helpText = COMMANDS.map(
                    (cmd) => `${cmd.cmd}          ${cmd.desc}`
                ).join("\n");

                setTerminalOutput((prevOutput) => [
                    ...prevOutput,
                    `> ${inputCmd}`,
                    helpText,
                ]);
            } else if (command) {
                // Show the description for the matched command
                setTerminalOutput((prevOutput) => [
                    ...prevOutput,
                    `> ${inputCmd}`,
                    command.desc,
                ]);
            } else {
                // Show unknown command message
                setTerminalOutput((prevOutput) => [
                    ...prevOutput,
                    `${inputCmd}`,
                    `Unknown command: ${inputCmd}`,
                ]);
            }

            setInputVal(""); // Clear input field
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

                {/* Dynamically render  */}
                {terminalOutput.map((line, index) => (
                    <div key={index} className="terminal-line">
                        <span className="prompt">
                            C:\Users\KellyEsquejo&gt;
                        </span>
                        <span className="terminal-output">{line}</span>
                    </div>
                ))}

                {/* User input */}
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
