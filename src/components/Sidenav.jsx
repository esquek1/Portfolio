import React from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import gitHubLogo from '/github-mark.svg'
import "../css/sidenav.css"
import { Link } from "react-router-dom";


function Sidenav() {
  return (
    <div className='sidebar'>
        <div className='title'>
           Kelly Esquejo Portfolio
        </div>
        <div className='social'>
            <a href="https://github.com/esquek1" target="_blank">
                <img src={gitHubLogo} className="logo" alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/kelly-esquejo/" target="_blank">
                <img src={linkedInLogo} className="logo linkedin" alt="LinkedIn logo"/>
            </a>
        </div>
        <div className='pages'>
            <nav >
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item extraBorder">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
                
            </nav>
        </div>
        
    </div>
  )
}

export default Sidenav