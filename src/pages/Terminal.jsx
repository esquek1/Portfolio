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
const JOKES = ["!false (It’s funny because it’s true.)"];
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
    const inputRef = useRef(null);

    // Array for previously entered commands including command name, description, and component
    const [terminalHistory, setTerminalHistory] = useState([]);
    // State for Caps Lock
    const [capsLock, setCapsLock] = useState(false);

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
            case "-clear":
                clearTerminal();
                return; // Do not append "-clear" to the history

            case "-help":
                output = generateHelpOutput();
                break;

            default: {
                // To avoid the following error: "Unexpected lexical declaration in case block"
                // placed {} brackets
                const command = COMMANDS.find((cmd) => cmd.cmd === inputCmd);
                if (command) {
                    // output = command.desc;

                    // If there is a component for the command, it will be added to the terminalHistory
                    if (command.component) {
                        component = command.component; // Render the corresponding component if available
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
        const commandsList = COMMANDS.map((cmd, index) => (
            <div key={index} className="command-item">
                <span className="command-cmd">{cmd.cmd || ""}</span>
                <span className="command-desc">{cmd.desc}</span>
            </div>
        ));

        const secretMessage = (
            <div className="secret-message">
                Hint: There are two secret commands! Can you guess it?
            </div>
        );

        return (
            <div>
                {commandsList}
                {secretMessage}
            </div>
        );
    };

    const generateHelloOutput = () => {
        // Pick a random response from the HELLO array
        const randomResponse = HELLO[Math.floor(Math.random() * HELLO.length)];
        return randomResponse;
    };

    const generateJokeOutput = () => {
        // Pick a random response from the JOKE array
        const randomResponse = JOKES[Math.floor(Math.random() * HELLO.length)];
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
            const inputCmd = inputVal.trim(); // Trim white spaces
            processCommand(inputCmd);
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
                <pre className="ascii-art">{asciiArt}</pre>

                {/* Iterate through the terminal history array and render the objects */}
                {terminalHistory.map((entry, index) => (
                    <div key={index} className="terminal-line">
                        <span className="prompt">C:\Users\KEsquejo&gt;</span>
                        <span className="terminal-command">
                            {entry.command}
                        </span>
                        {/* <pre> {entry.output}</pre> */}
                        <div className="entry-output"> {entry.output}</div>

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
