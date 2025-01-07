import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Terminal from "./pages/Terminal";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import CarBackground from "./assets/cars/car0.jpg";
import "./css/app.css";

function App() {
    return (
        <div className="app-container">
            <div className="background car">
                <Background />
            </div>

            {/* Home, About, and Contact will render inside the terminal window.
            While Projects will render like a normal page and will minimized the terminal. */}

            <div className="app-content">
                <div className="overlay-container">
                    <Terminal />
                </div>
            </div>
        </div>
    );
}

export default App;
