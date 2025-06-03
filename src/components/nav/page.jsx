import React from 'react'
import './style.css'
import { FaHamburger } from "react-icons/fa";

function nav() {
  return (
    <div>
       <nav>
        <div className="logo">
            <img src="/fantalogo.webp" alt="" />
        </div>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Brand</a></li>
            <li><a href="">Contect</a></li>
        </ul>
        <FaHamburger className='icon'/>
       </nav>
    </div>
  )
}

export default nav
