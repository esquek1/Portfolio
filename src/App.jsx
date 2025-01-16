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
            <Background />

            <div className="app-content">
                <Terminal />
            </div>
        </div>
    );
}

export default App;
