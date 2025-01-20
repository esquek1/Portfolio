import React, { useRef, useState, useEffect } from "react";
import "../css/Terminal.css";
import About from "../components/About";
import Contact from "../components/Contact";
import Help from "../components/Help";
import Projects from "../components/Projects";

const COMMANDS = [
    { cmd: "-about", desc: "About Me", component: <About /> },
    { cmd: "-clear", desc: "Clear the terminal", component: null },
    {
        cmd: "-contact",
        desc: "My Contact Information",
        component: <Contact />,
    },
    { cmd: "-help", desc: "Show available commands", component: null },
    {
        cmd: "-projects",
        desc: "Show projects I have worked on",
        component: <Projects />,
    },
];

const HELLO = ["Greetings!", "World!", "Hi!", "Hey!", "ヾ(•＾▽＾•)"];

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

function Terminal() {
    const asciiArt = getAsciiArt();

    const [inputVal, setInputVal] = useState("");
    // State variables to store terminal output and the active component
    const [terminalHistory, setTerminalHistory] = useState([]); // Store command history
    const inputRef = useRef(null);
    const terminalEndRef = useRef(null);
    const [capsLock, setCapsLock] = useState(false); // State for Caps Lock

    // Handles every change typed or deleted in the input field
    // Ensure inputVal state is in sync with the input value
    // best practices for form handling
    // makes the component controlled
    const handleInputChange = (event) => {
        setInputVal(event.target.value);
    };

    // Scrolls to the input text after command has been process
    const scrollToBottom = () => {
        inputRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // When user presses 'Enter', verify input
    const processCommand = (inputCmd) => {
        let output = "";
        let component = null;

        switch (inputCmd) {
            case "-help":
                output = generateHelpOutput();
                break;

            case "-clear":
                clearTerminal();
                return; // Do not append "-clear" to the history

            default: {
                // To avoid the following error: "Unexpected lexical declaration in case block"
                const command = COMMANDS.find((cmd) => cmd.cmd === inputCmd);
                if (command) {
                    output = command.desc; // Default to the description
                    if (command.component) {
                        component = command.component; // Include component if present
                    }
                } else {
                    output = `Unknown command: ${inputCmd}`;
                }
                break;
            }
        }

        // Update the terminal history
        setTerminalHistory((prevHistory) => [
            ...prevHistory,
            { command: inputCmd, output, component },
        ]);
    };

    // Generates the output for the "-help" command
    const generateHelpOutput = () => {
        return COMMANDS.map((cmd) => `${cmd.cmd.padEnd(15)} ${cmd.desc}`).join(
            "\n"
        );
    };

    const generateHelloOutput = () => {
        // Pick a random response from the HELLO array
        const randomResponse = HELLO[Math.floor(Math.random() * HELLO.length)];
        return randomResponse;
    };

    // Clears the terminal history
    const clearTerminal = () => {
        setTerminalHistory([]);
    };

    // Handle user pressing Enter
    const handleKeyDown = (event) => {
        // Detect if Caps Lock is on
        if (event.getModifierState("CapsLock")) {
            setCapsLock(true);
        } else {
            setCapsLock(false);
        }

        if (event.key === "Enter") {
            const inputCmd = inputVal.trim(); // Trim spaces
            processCommand(inputCmd); // Process the command
            setInputVal(""); // Clear input field
        }
    };

    // Check if Caps Lock is on

    // When window or div is clicked, focus on the input field
    const handleDivClick = () => {
        inputRef.current && inputRef.current.focus();
    };

    // Click listener for focusing on the input field
    useEffect(() => {
        document.addEventListener("click", handleDivClick);
        return () => {
            document.removeEventListener("click", handleDivClick);
        };
    }, []);
    useEffect(() => {
        scrollToBottom();
    }, [terminalHistory]);

    return (
        <div className="terminal-container">
            <div className="terminal-content">
                <pre>{asciiArt}</pre>
                {/* Render terminal history */}
                {terminalHistory.map((entry, index) => (
                    <div key={index} className="terminal-line">
                        <span className="prompt">C:\Users\KEsquejo&gt;</span>
                        <span className="terminal-output">{entry.command}</span>
                        <pre>{entry.output}</pre>

                        {/* Render the component if present */}
                        {entry.component && (
                            <div className="component-container">
                                {entry.component}
                            </div>
                        )}
                    </div>
                ))}
                {/* User input */}
                <div className="terminal-line">
                    <span className="prompt">C:\Users\KEsquejo&gt;</span>
                    <input
                        ref={inputRef}
                        value={inputVal}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        type="text"
                        className="terminal-input"
                    />
                    {/* Show Caps Lock warning */}
                    {capsLock && (
                        <div className="caps-lock-warning">Caps Lock is ON</div>
                    )}
                </div>
                {/* <div ref={terminalEndRef} /> */}
            </div>
        </div>
    );
}

export default Terminal;
