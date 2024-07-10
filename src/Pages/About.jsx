import React from 'react'
import '../Styles/About.css'
import Navbar from '../Navbar/Navbar'
import Webteam from '../assets/Images/webteam.jpeg'
import Team from '../assets/Images/team.jpeg'
import Digitalmkt from '../assets/Images/digitalmkt.jpeg'
import Goal from '../assets/Images/goal.jpeg'
import Shake from '../assets/Images/shake2.png'
import Work from '../assets/Images/team6.jpeg'
import Manage from '../assets/Images/team5.jpeg'
import Brand from '../assets/Images/shares.jpg'
import Influencer from '../assets/Images/influencer.jpeg'
import Content from '../assets/Images/camera.jpeg'
import MobileMenu from '../MobileNav/Mobilenav'

function About() {
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.goal');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has occurred
            }
        });
    });

    items.forEach(goal => {
        observer.observe(goal);
    });
});
  return (
    <>
        <Navbar/>
        <MobileMenu/>
        <h2>About Us</h2>
        <div className="about-content">
          <section className='about'>
            <h1>About Us</h1>
            <p>The way businesses need to communicate and create visibility in the market today has
        undergone a radical shift. As Evogress Group Limited we assist our clients with the process of
        selling ideas, products, and services and establishing world-class brands through strategic
        communication and digital marketing, keeping in mind the constant change and evolution of
        the business realm.</p>
             <text>We understand our clients’ needs thus using public relations, digital marketing, branding,
                influencer management, and web solutions as some of the most strategic tools a company
                can utilize to communicate and create awareness with its key audiences – existing customers,
                potential customers, investors, employees, and others. We model our approach to such
                solutions with this in mind.</text>
             
            <img className="team"src={Team} alt="" />
          </section>
          <section className='goal'>
            <img className="board"src={Goal} alt="" />
            <img className="shake"src={Shake} alt="" />
            <h1>Goal</h1>
            <h3> OUR GOAL:</h3>
             <text>We are committed to being the most sought-after communication and digital
                    marketing agency in Africa by merit.
            </text>
            <h5 className="more-caption">WE SUPPORT BOTH WELL-ESTABLISHED ORGANIZATIONS AS WELL AS SME’S TO REACH
                  THEIR FULL POTENTIAL USING DIFFERENTLY CURATED SOLUTIONS, BOTH IN
                  COMMUNICATION AND MARKETING 
            </h5>
          </section>
          <section className='core-values'>
            <h1>Core Values</h1>
            <div className="core-content">
              <p className='list-title'>
                We stand strong together in unity aiding each other
                working hard towards making sure that we produce the best there is to offer
              </p>
                <h4 className='values'>Our Core Values</h4>
              <div className="value-list">
                <li>Transparency</li>
                <li>Professionalism</li>
                <li>Efficiency and effectiveness
                </li>
                <li>Integrity</li>
                <li>Innovative and up to date with the shifts in technology</li>
                <li>Business Oriented </li>
               </div> 
               <div className="overlay">
                  <div className="info">Try it out</div>
               </div>
               <img className="Work"src={Work} alt="" />
            </div>
            
          </section>
          <section className='our-teams'>
            <div className="team-cards">
              <div className="card-container">
                <div className="marketing">
                  <img className="mkt"src={Digitalmkt} alt="" />  
                <h6 className='detail-caption'>DIGITAL MARKETING</h6>
                </div>
              </div>
              <div className="card-container">
                <div className="managing">
                 <img className="manage"src={Manage} alt="" /> 
                <h6 className='detail-caption'>SOCIAL MEDIA MANAGEMENT</h6>

                </div>
              </div>
              <div className="card-container">
                <div className="webteam">
                  <img className="web-team"src={Webteam} alt="" />   
                  <h6 className='detail-caption'>WEBSITE DESIGN & DEVELOPMENT</h6>
                  </div>
              </div>
              <div className="card-container">
                <div className="branding">
                 <img className="brand-team"src={Brand} alt="" /> 
                <h6 className='detail-caption'>BRANDING STRATEGY</h6>
                </div>
                
              </div>
              <div className="card-container">
                <div className="influence">
                  <img className="influence-team"src={Influencer} alt="" />   
                  <h6 className='detail-caption'>INFLUENCER MANAGEMENT</h6>
 
                </div>
              </div>
              <div className="card-container">
                <div className="content-prime">
                  <img className="content-team"src={Content} alt="" /> 
                <h6 className='detail-caption'>CONTENT CREATION & MARKETING</h6>

                </div>
                
              </div>
              
                      
            </div>

            <h1>Our Teams</h1>
          </section>
          <div className="footer">
            <h1>yow</h1>
          </div>
          
          
          </div>

          
        
        
      
    </>
  )
}

export default About
