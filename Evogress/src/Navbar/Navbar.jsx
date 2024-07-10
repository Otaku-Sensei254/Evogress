import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="top">
      <Link to="/"><div className="title">EVOGRESS</div></Link>
     <nav className='nav-links'>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/career">Career</Link>
        </ul>
     </nav>
    </div>
     
    </>
      
    
  )
}

export default Navbar
