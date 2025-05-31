import React from 'react'
import './style.css'

function page() {
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
       </nav>
    </div>
  )
}

export default page
