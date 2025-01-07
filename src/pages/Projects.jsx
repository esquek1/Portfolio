import { useEffect, useRef } from "react";
import React from "react";
import "../css/projects.css";
import CypherVaultLogo from "../assets/images/Cypher_Vault_logo.png";

function Projects() {
    useEffect(() => {
        const handleWheel = (event) => {
            const container = document.querySelector(".images-container");
            if (container && event.deltaY !== 0) {
                container.scrollLeft += event.deltaY;
                event.preventDefault(); // Prevent default vertical scrolling behavior
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
    const ref = useRef();

    return (
        <div className="project-container">
            <div className="project-content">
                <div className="project-item">
                    <a href="https://github.com/esquek1/CypherVault">
                        <h3 className="project-title">Cypher Vault</h3>
                    </a>

                    <div className="project-image">
                        <img src={CypherVaultLogo} alt="" />
                    </div>
                    <h5 className="project-skills">
                        C++, SQLite, AES Encryption
                    </h5>
                    <p className="project-description">
                        A terminal-based, multi-factor authentication password
                        manager using C++ and SQLite. Implemented AES encryption
                        with OpenSSL to ensure data security.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="project-title">Graphic Design Portfolio</h3>
                    <h5 className="project-skills">
                        TypeScript, React, HTML, CSS
                    </h5>
                    <p className="project-description">
                        Collaborated with Reena Castillo, a graphic designer, to
                        bring their vision to life by developing a portfolio
                        website that showcases their creative work.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="project-title">
                        Compiler for Espresso Language
                    </h3>
                    <h5 className="project-skills">Java</h5>
                    <p className="project-description">
                        Using Java, developed and integrated the scanner and
                        parser, and semantic checker, including name resolution,
                        type checking, and modifier checking of a compiler for
                        the Espresso Language.
                    </p>
                </div>
                <div className="project-item">
                    <h3 className="project-title">Right Way</h3>
                    <h5 className="project-skills">
                        React Js, JavaScript, HTML, CSS
                    </h5>
                    <p className="project-description">
                        A web application written in ReactJS and CSS aimed at
                        simplifying the planning process for trip
                        recommendations. Project was showcased at the Fred and
                        Harriet Cox Senior Design Competition.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
