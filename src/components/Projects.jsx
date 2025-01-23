import React from "react";
import "../css/projects.css";
function Projects() {
    const cypherVaultArt = () => {
        return `  _____          __             _   __          ____ 
 / ___/_ _____  / /  ___ ____  | | / /__ ___ __/ / /_
/ /__/ // / _ \\/ _ \\/ -_) __/  | |/ / _ \`/ // / / __/
\\___/\\_, / .__/_//_/\\__/_/     |___/\\_,_/\\_,_/_/\\__/ 
    /___/_/                                          `;
    };
    //         return `  ___|                |                      \\ \\     /              |  |
    //  |      |   |  __ \\   __ \\    _ \\   __|       \\ \\   /  _\` |  |   |  |  __|
    //  |      |   |  |   |  | | |   __/  |           \\ \\ /  (   |  |   |  |  |
    // \\____| \\__, |  .__/  _| |_| \\___| _|            \\_/  \\__,_| \\__,_| _| \\__|
    //        ____/  _|                                                          `;
    //     };

    const portfolioWebsiteArt = () => {
        return `   ___    _____         __  _ ____         ___           __       ______    
  / _ \\  / ___/__ ____ / /_(_) / /__      / _ \\___  ____/ /____  / _/ (_)__ 
 / , _/ / /__/ _ \`(_-</ __/ / / / _ \\    / ___/ _ \\/ __/ __/ _ \\/ _/ / / _ \\
/_/|_|  \\___/\\_,_/___/\\__/_/_/_/\\___/   /_/   \\___/_/  \\__/\\___/_//_/_/\\___/`;
    };

    const compilerArt = () => {
        return `  _____                _ __       
 / ___/__  __ _  ___  (_) /__ ____
/ /__/ _ \\/  ' \\/ _ \\/ / / -_) __/
\\___/\\___/_/_/_/ .__/_/_/\\__/_/   
              /_/                 `;
    };

    const rightWayArt = () => {
        return `   ___  _      __   __    _      __         
  / _ \\(_)__ _/ /  / /_  | | /| / /__ ___ __
 / , _/ / _ \`/ _ \\/ __/  | |/ |/ / _ \`/ // /
/_/|_/_/\\_, /_//_/\\__/   |__/|__/\\_,_/\\_, / 
       /___/                         /___/  `;
    };

    return (
        <div className="project-container">
            <div className="project-content">
                Below are details of some of the projects I have worked on:
                <div className="project-item">
                    <a
                        className="project-link"
                        href="https://github.com/esquek1/CypherVault">
                        <pre className="project-title">{cypherVaultArt()} </pre>
                    </a>

                    <h5 className="project-skills">
                        C++, SQLite, AES Encryption
                    </h5>
                    <p className="project-description">
                        A terminal-based, multi-factor authentication password
                        <br />
                        manager using C++ and SQLite. Implemented AES encryption
                        <br />
                        with OpenSSL to ensure data security.
                    </p>
                </div>
                <div className="project-item">
                    <a
                        className="project-link"
                        href="https://github.com/esquek1/graphic-design-portfolio">
                        <pre className="project-title">
                            {portfolioWebsiteArt()}
                        </pre>
                    </a>

                    <h5 className="project-skills">
                        TypeScript, React, HTML, CSS
                    </h5>
                    <p className="project-description">
                        Collaborated with Reena Castillo, a graphic designer,
                        <br />
                        to bring their vision to life by developing a portfolio
                        <br />
                        website that showcases their creative work.
                    </p>
                </div>
                <div className="project-item">
                    <pre className="project-title">{compilerArt()}</pre>
                    <h5 className="project-skills">Java</h5>
                    <p className="project-description">
                        Developed a compiler for the Espresso language as a term
                        <br />
                        project, collaborating with another developer to design
                        <br />
                        and implement compiler components using Java.
                        <ul>
                            <li>Scanner and Parser</li>
                            <li>Parse Tree Construction</li>
                            <li>Semantic Checker</li>
                            <li>Type Checking</li>
                            <li>Modifier Checking</li>
                        </ul>
                        {/* Using Java, developed and integrated the scanner and
                        <br />
                        parser, and semantic checker, including name resolution,
                        <br />
                        type checking, and modifier checking of a compiler for
                        <br />
                        the Espresso Language. */}
                    </p>
                    <span className="private">
                        (This project is a private repository.)
                    </span>
                </div>
                <div className="project-item">
                    <a
                        className="project-link"
                        href="https://github.com/esquek1/RightWay">
                        <pre className="project-title">{rightWayArt()} </pre>
                    </a>

                    <h5 className="project-skills">
                        React Js, JavaScript, HTML, CSS
                    </h5>
                    <p className="project-description">
                        A web application written in ReactJS and CSS aimed at
                        <br />
                        simplifying the planning process for trip
                        <br />
                        recommendations. Project was showcased at the Fred and
                        <br />
                        Harriet Cox Senior Design Competition.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
