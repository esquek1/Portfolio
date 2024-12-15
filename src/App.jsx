import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import Background from "./components/Background";
import Cursor from "./components/Cursor";
import "./css/app.css";
function App() {
    useEffect(() => {
        const handleWheel = (event) => {
            const container = document.querySelector(".whole-page");
            if (container && event.deltaY !== 0) {
                const scrollAmount = event.deltaY > 0 ? 1 : -1; // Scroll right for positive deltaY, left for negative
                const currentScroll = container.scrollLeft;
                const pageWidth = container.clientWidth; // Full width of the visible content area
                container.scrollLeft = currentScroll + scrollAmount * pageWidth; // Scroll by one page width
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
        <div className="app-container cursor" ref={ref}>
            <div className="background">
                <Background />
            </div>

            <Cursor />
            <div className="app-content">
                <BrowserRouter>
                    <div className="sidenav">
                        <Sidenav />
                    </div>
                    <div className="app-pages">
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
