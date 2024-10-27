import React from 'react'
import '../css/projects.css'
function Projects() {
  return (
    <div className='projects-container'>
		<h3>Projects </h3>
		<div className='project-item'>
			<h3 className='title'>Cypher Vault</h3>
			<h5 className='project-skills'>C++, SQLite, AES Encryption</h5>
			<p className='project-description'>
				A terminal-based, multi-factor authentication password manager using C++ and SQLite. 
				<br/>
				Implemented AES encryption with OpenSSL to ensure data security.
			</p>
		</div>
		<div className='project-item'>
			<h3 className='title'>Photography Portfolio</h3>
			<hp className="project-skills">React Js, JavaScript, HTML, CSS</hp>
			
		</div>
		<div className='project-item'>
			<h3 className='title'>Compiler for Espresso Language</h3>
			<hp className="project-skills">Java</hp> 
		</div>
		<div className='project-item'>
			<h3 className='title'>Catering Website</h3>
			<hp className="project-skills">React Js, JavaScript, HTML, CSS</hp> 
		</div>

    </div>
  )
}

export default Projects