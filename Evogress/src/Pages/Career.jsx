import React from 'react'
import '../Styles/Career.css'
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
function Career() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "13b0a273-42bb-4565-985f-81dd4234104b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <Navbar/>
    <MobileMenu/>
      <h1>Careers</h1>
      <div className="my-sections">
            <section className='Career'>
              <h1 className='headline-1'> We Offer:</h1>
                <div className="carousel-part">
                    <div className="carousel-inner">
                        <img className="team"src={Team} alt="" />  
                      <img className="board"src={Goal} alt="" />
                      <img className="mkt"src={Digitalmkt} alt="" />
                      <img className="manage"src={Manage} alt="" /> 
                      <img className="web-team"src={Webteam} alt="" /> 
                      <img className="brand-team"src={Brand} alt="" /> 
                      <img className="influence-team"src={Influencer} alt="" />  
                      <img className="content-team"src={Content} alt="" /> 
                    </div>
                      
                </div>
                <div className="why">
                  <h2>Why Choose us?</h2>
                  <li>We use the latest web technologies</li>
                  <li>It has well-defined communication channels.</li>
                  <li>We ensure you get your website in good time</li>
                  <li>Post the website development, we provide support & maintenance.</li>
                </div>
                <div className="BRANDING">
                  <h3>Branding</h3>
                  <p>Build your own Brand with our unique designs that represent your image,
                        personality, values and attitude.
                        It is essential for modern businesses to maintain a consistent brand identity and
                        maintain their brand image. A brand is more than a logo and color scheme,
                        branding is a well-thought process and strategy that gives you an opportunity to
                        make an impression on your target audience.
                  </p>
                </div>
                <div className="INFLUENCE">
                  <h3>INFLUENCER MANAGEMENT AND MARKETING</h3>
                  <p>Influencer management is important today, an influencer could be a celebrity or an online
personality that happens to be a sensation to the masses. As much as mainstream
advertisements are being done also. They tend to have a huge following according to what
their personal brands support and do. We help manage relationships with them as well as
collaborate with them to market and advertize your product or service as a business or
organization. It includes everything from negotiation to collaboration, content creation,
approvals, campaign management, payments, and long-term relationship building.
The collaboration can be dictated by a few factors such as:
            <li>The number of followers an influencer has</li>
            <li>Their engagement rate.</li>
            <li>Your campaign requirements: How many social media posts do you want them to
            create? Does it include images or videos?</li>
            <li>Past collaborations and per post charges of an influencer</li>
            <li>The duration of your campaign</li>
            <li>Other benefits you offer to your influencers</li>
            </p>
                </div>

            </section>  
            <section className='contact'>
              {/*13b0a273-42bb-4565-985f-81dd4234104b  */}
              <div className="email-section">
      <h2>Get in touch, send us an email</h2>
      <form onSubmit={onSubmit}>
        <div className="inputs">
        
        <input type="text" placeholder='Enter your name here' required/>
        
        <input type="email" placeholder='Enter your email here' required/>
       
        <input type="tel" name="phone" placeholder='Enter your mobile number'required/>
       
        <textarea className="text-area"name='message' rows="6" placeholder='enter your message'required></textarea>
      </div>
        <button type='submit' className='btn-email'>Submit Message</button>
      </form>
      <span>{result}</span>
      </div>
      <div className="whatsapp section">
      <a 
        href="https://wa.me/+254720857776"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
            </section>
      </div>
      
    </>
  )
}

export default Career
