import React from 'react'
import '../Styles/Home.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Webdev from '../assets/Images/Webdev.png'
import shell from '../assets/Images/shell.png'
import Friend from '../assets/Images/Friend.jpeg'
import MobileMenu from '../MobileNav/Mobilenav'
const Home = () => {
  return (
    <>
    <Navbar/>
    <MobileMenu/>
    <div className="home-content">
      <h1>Welcome to EVOGRESS</h1>
      <p>Evogress Group Limited (EGL) is focused on working with other organizations,
businesses, and personal brands to ensure they are full, positioned, equipped, and
sustained within their target market/ audience using the unique and strategic
services we provide. 
</p>
<Link to="/career"><button className="btn">Join now!</button></Link> 
    
    
    
    </div>
    
    
    </>
    
  )
}

export default Home