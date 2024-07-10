import React from 'react'
import '../Styles/Services.css'
import Navbar from '../Navbar/Navbar'
import PR from '../assets/Images/pr.jpeg'
import MobileMenu from '../MobileNav/Mobilenav'
function Services() {
  return (
    <div>
        <Navbar/>
        <MobileMenu/>
        <div className="service-content">
          <h1>Services </h1>
          <section className='PR'>
            <div className="relations">
                <div className="hover-effect">
                 <img className="PR-image"src={PR} alt="" />
              <h4 className='hover-text'>Crafting narratives that connect, engage, and inspire.
                 At Evogress, we don't just tell stories; we build legacies</h4> 
                </div>
              
              <h2 className='service-header'>PUBLIC RELATION</h2>
              <p className='public-paragraph'>
              When it comes to PR, developing a clearly defined road map is the key to success. Using a
              unique combination of traditional publicity mixed with social PR, our team deploys a multichannel approach to get your story in front of the right audience. We are agile, wellconnected, and have years of media relations experience. Whether it’s a feature, an op-ed, a
              review in the or your event our PR team has got you covered.
              </p>
              
            </div>
           
          </section>
                    {/* This is PR Strategy */}
          <section className='how'>
             <div className="do-it">
              <h3 className='how'>HOW WE DO IT</h3>
               <h5>PUBLIC RELATIONS STRATEGY</h5>
                <p className='intro-p'>For you to effectively communicate and reach out to your target audience, you need a clear
strategic plan on how to do it. Evogress takes time to understand your brand and through
working closely with your team, we will develop an elaborate personalized PR strategy to
achieve your desired business or brand goals effectively</p>
                      {/* Co-Op communications */}
              <h3 className='how'>HOW WE DO IT</h3>
                <h5 className='Corp'>CORPORATE COMMUNICATION</h5>
                  <p className='corp-p'>PR has changed drastically over the years, it simply is not what it used to be. We bridge the
gap between traditional media and the brave news of digital, which has opened multiple new
avenues for message dissemination. Our PR team is adapting each day to current trends while still ensuring relationships are cultivated and handling the brand’s reputation with
professionalism. </p>
                    {/* This is branding strategy */}
              <h3 className='how'>HOW WE DO IT</h3>
                  <h5 className='branding'>BRAND POSITIONING</h5>
                    <p className='branding-p'>We will help you to implement a solid brand position for your business. Through this a brand
positioning statement is used so as to give your target market a holistic picture of how you
would like your brand to be perceived by customers (based on research and data).
Simply put, this statement is the who, when, where, why, and how of your <text>brand’s identity
and putting it across to your target audience. This will ensure you have</text> Market
differentiation, Easy purchase decisions and value confirmation or credibility. Evogress Group
will work with you to determine the best positioning strategy to reach your business goals
and engage your target audience in a different and personalized way. </p>
                <h5 className='Crisis'>CRISIS MANAGEMENT</h5>
                  <p className='crisis-p'>We at Evogress believe that the most important asset of an organization is its reputation. We
advise companies of all sizes on how to tackle a crisis. We do this by ensuring they know how
to handle one before it actually occurs, during the actual crisis and post the crisis.
For immediate counsel, <text>you can contact us on 0703989816</text> </p>
                <h5 className='Digital-mkt'>DIGITAL MARKETING</h5>
                  <p className='digital-p'>Digital marketing has taken over the traditional ways of marketing. We assist our clients with
online marketing activities and other digital solutions to create brand visibility and increase
their sales. The solutions we offer are very affordable and provide a good return on
investment. We also provide you with analysis reports of your digital marketing
campaign performance allowing you to adapt your marketing strategy and tactics for
accurate results.
Some of the digital marketing we do:<details>Include
                                            <li data-index="1.">Blogs</li>
                                            <li data-index="2.">Keyword Research</li>
                                            <li data-index="3.">Lead Generation</li>
                                            <li data-index="4.">Analytics Reporting</li>
                                            <li data-index="5.">Quality Traffic</li>
                                            <li data-index="6.">Google Search</li>
                                            <li data-index="7.">Display Ads</li>
                                            <li data-index="8.">Analytics Reporting</li>
                                            </details> </p>
                                        
              <h5 className='SMM'>SOCIAL MEDIA MARKETING</h5>
                  <p className='smm-p'>Social Media Marketing is a key part of any digital marketing strategy, it creates
                      awareness, increases consumer traffic, drives sales and inquiries, and turns
                      followers into customers.
                      Establishing your brand as an authority requires a strong social strat egy targeted
                      at maintaining your social presence and engagement. social engagement with
                      your audience is the key to elevating sales and retaining loyal customers.
                      At Evogress we help develop great content for all your social media platforms;
                      LinkedIn, Instagram, Twitter and Facebook. Social Media Marketing includes:
                        <details>
                        <li data-index="1.">Blogs</li>               
                        <li data-index="1.">Platform Research</li>
                        <li data-index="2.">Social Media Strategy</li>
                        <li data-index="3.">Social Media Communication Schedule</li>
                        <li data-index="4.">Creative Posts</li>
                        <li data-index="5.">Audience Outreach</li>
                        <li data-index="6.">Social Media Promotions</li>
                        <li data-index="7.">Analytics</li>
                        </details>
                  </p>
            </div>
          </section>
            
        </div>
      
      
    </div>
  )
}

export default Services
