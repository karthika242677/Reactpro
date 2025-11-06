import React from 'react'
import { Container } from 'react-bootstrap'
import { foot } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
<Container fluid className='bg-dark text-light p-5'>   
     <div className="row">
        
        {/* Brand Info */}
        <div className="col-lg-3 col-md-6">
          <h1 className="fw-bold">Mixtas</h1>
          <p>
            Whether you're a trendsetter, a minimalist, or an adventurer at heart, 
            Mixtas has something for everyone. Our diverse range of styles caters 
            to various personas.
          </p>
          <div className="d-flex gap-3 fs-4 icon mb-5">
            <i className="bi bi-facebook border p-1 rounded-circle m-1"></i>
            <i className="bi bi-twitter-x border p-1 rounded-circle m-1 "></i>
            <i className="bi bi-instagram border p-1 rounded-circle m-1"></i>
            <i className="bi bi-pinterest border p-1 rounded-circle m-1 "></i>
          </div>
        </div>

        {/* About Us */}
        <div className="col-lg-2 col-md-6 community-links">
          <h5>About Us</h5>
          <p>Our Story</p>
          <p>Mission &amp; Values</p>
          <p>Meet the Team</p>
          <p>Sustainability Efforts</p>
          <p>Brand Partnerships</p>
          <p>Influencer Collaborations</p>
        </div>

        {/* Accessibility */}
        <div className="col-lg-2 col-md-6 community-links">
          <h5>Accessibility</h5>
          <p>Accessibility Statement</p>
          <p>Site Map</p>
          <p>Web Accessibility Options</p>
          <p>ADA Compliance</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        {/* Community */}
        <div className="col-lg-2 col-md-6 community-links">
          <h5>Join Our Community</h5>
          <p>VIP Membership</p>
          <p>Loyalty Program</p>
          <p>Customer Reviews</p>
          <p>Style Forums</p>
          <p>Job Openings</p>
          <p>Culture and Values</p>
        </div>

        {/* Newsletter */}
        <div className="col-lg-3 col-12">
          <h5>Let's get in touch</h5>
          <p>Sign up for our newsletter and receive 10% off your first order.</p>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-100 p-2 rounded border"
          />
    
        </div>

        <hr/>
        <div className="d-lg-flex d-md-flex justify-content-between px-5 py-1">
            <div><p>© 2024 Mixtas All rights reserved. Developed By karthika</p></div>
            <div><img src={foot.foot1} alt="" height="20"/></div></div>
      </div>
    </Container>  
  )
}

export default Footer
