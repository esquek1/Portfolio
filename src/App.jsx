import { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Sidenav from './components/Sidenav'

import './App.css'


function App() {
	useEffect(() => {
		const handleWheel = (event) => {
			const container = document.querySelector('.images-container');
			if (container && event.deltaY !== 0) {
				container.scrollLeft += event.deltaY;
				event.preventDefault(); // Prevent default vertical scrolling behavior
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, []);

	return (
		<div className='whole-page'>
			<BrowserRouter>
				<Sidenav/>
					<Routes>  
						<Route path="/" element={<Home />}>
							<Route index element={<Home />} />
							<Route index path="about" element={<About/>} />
							<Route path="contact" element={<Contact />} />
							<Route path="work" element={<Projects />} />
						</Route>
					</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
