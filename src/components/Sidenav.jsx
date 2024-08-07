import React from 'react'
import linkedInLogo from '/linkedin-logo.svg'
import gitHubLogo from '/github-mark.svg'
import "../css/sidenav.css"
import { Link } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RiFileInfoFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";

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
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/">
                            <span className='text'>Home</span>
                            <IoHome className='icon' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about">
                            <span className='text'>About</span>
                            <RiFileInfoFill className='icon' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact">
                            <span className='text'>Contact</span>
                            <RiContactsBook2Fill className='icon' />
                        </Link>
                    </li>
                    <li className="extraBorder">
                        <Link to="/projects">
                            <span className='text'>Projects</span>
                            <MdWork className='icon' />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}

export default Sidenav