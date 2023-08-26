import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-featured">
            <div className="container">
            <div id="menu-footer-menu-updated">
                <p>
                    <Link to="/terms-and-conditions">Booking Terms </Link>|   
                    <Link to="/contact-us">Contact Us</Link>|  
                    <Link to="/frequently-asked-questions">FAQs </Link>|
                    <Link to="/about-us">About Us</Link>|
                    <Link to="/our-crew">Our Crew</Link>|
                    <Link to="/what-to-expect">What to Expect</Link>
                </p>
                <p>
                    <Link to="/admin/login">Admin Login</Link>
                </p>
            </div>
            <div className="subtle-footer">
                <p>
                    <Link to="/contact-us"><u>Contact Us</u></Link>
                </p>
                <p>
                    <span>
                        <i className="fas fa-envelope"></i> 
                        <a href="mailto:info@kilimanjaroawaits.com">info@kilimanjaroawaits.com</a>
                    </span>
                </p>
                <p>
                    <span>
                        <i className="fas fa-phone"></i> 
                        <a href="#">+254 792 789 618</a>
                    </span>
                </p>
            </div>
            <div className="social-grey" style={{width:"80%",marginTop:"30px",marginBottom: '20px', marginLeft: "auto", marginRight: 'auto'}}>
                <ul style={{padding:"0px"}}>
                <li>
                    <a href="" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                    <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/kilimanjaro.awaits/" target="_blank">
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                    <i className="fab fa-pinterest-p"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a className="you" href="" target="_blank">
                    <i className="fab fa-youtube"></i>
                    </a>
                </li>
                </ul>
            </div>

            </div>
        </div>
    
    )
}

export default Footer
