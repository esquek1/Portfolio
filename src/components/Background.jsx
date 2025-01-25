import React, { useEffect, useRef } from "react";
import "../css/Background.css";

// Futyre
// Use Canvas API to draw a night sky (gradient)
const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas size to match the window
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawGradient(ctx);
        };

        // Call the function initially and on window resize
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        return () => {
            window.removeEventListener("resize", setCanvasSize);
        };
    }, []);

    const drawGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);

        // Define the color stops for the gradient
        gradient.addColorStop(0, "#000000"); // Black at the top (night sky)
        gradient.addColorStop(0.3, "#020d2c"); // Deep navy
        gradient.addColorStop(0.6, "#0b2239"); // Soft blue
        gradient.addColorStop(1, "#112d42"); // Midnight blue at the horizon

        // Set the gradient as the fill style and fill the canvas
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    return <canvas ref={canvasRef} className="background-container" />;
};

export default Background;
