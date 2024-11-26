import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Projects from "./pages/Projects";

import Sidenav from "./components/Sidenav";
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
        <div className="whole-page" ref={ref}>
            <div className="page" id="home">
                <Home />
            </div>
            <div className="page" id="about">
                <About />
            </div>
            <div className="page" id="projects">
                <Projects />
            </div>
            <div className="page" id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default App;

/* <BrowserRouter>
                <Sidenav />

                <Routes>
                    <Route index element={<Home />} />
                    <Route index path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter> */
