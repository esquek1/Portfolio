import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import Terminal from "./pages/Terminal";
import Background from "./components/Background";

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
