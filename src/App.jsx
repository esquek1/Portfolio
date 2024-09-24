import { useEffect, useRef } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Projects from './pages/Projects';

import Sidenav from './components/Sidenav'
import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function App() {
	// useEffect(() => {
	// 	const handleWheel = (event) => {
	// 		const container = document.querySelector('.images-container');
	// 		if (container && event.deltaY !== 0) {
	// 			container.scrollLeft += event.deltaY;
	// 			event.preventDefault(); // Prevent default vertical scrolling behavior
	// 		}
	// 	};

	// 	window.addEventListener('wheel', handleWheel, { passive: false });

	// 	// Clean up the event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener('wheel', handleWheel);
	// 	};
	// }, []);
	const ref = useRef();

	return (
		// <div className='whole-page'>
		// 	<BrowserRouter>
		// 		<Sidenav/>
				
		// 		<Routes>  
		// 			<Route index element={<Home />} />
		// 			<Route index path="about" element={<About/>} />
		// 			<Route path="contact" element={<Contact />} />
		// 			<Route path="projects" element={<Projects />} />
		// 		</Routes>
		// 	</BrowserRouter>
		// </div>
		<div>
			<Parallax pages={4} ref={ref} style={{ top: '0', left: '0' }}>

				<ParallaxLayer >

					<img />
					<Home/>
				</ParallaxLayer>

				<ParallaxLayer 
					offset={1}
					onClick={() => ref.current.scrollTo(1)}
				>
					<Contact/>
				</ParallaxLayer>

				<ParallaxLayer 
					offset={2}
					onClick={() => ref.current.scrollTo(2)}
				>
					<About />
				</ParallaxLayer>

				<ParallaxLayer 
					offset={3}
					onClick={() => ref.current.scrollTo(3)}
				>
					<Projects/>
				</ParallaxLayer>

			</Parallax>
		</div>
	)
}

export default App
