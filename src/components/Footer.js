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
                    <Link to="/privacy-policy/">Privacy Policy </Link>|
                    <Link to="/about-us">About Us</Link>|
                    <Link to="https://wildwomenexpeditions.com/guide">Guides</Link>|
                    <Link to="#">Activity</Link>
                </p>
                <p>
                    <Link to="/admin/login">Admin Login</Link>
                </p>
            </div>
            <div className="subtle-footer">
                <p>
                    <Link to="/contact-us"><u>Contact Us</u></Link>
                </p>
                <span>
                    <i className="fas fa-envelope"></i> 
                    <a href="mailto:adventure@wildwomenexpeditions.com">kilimajhiking@gmail.com</a>
                </span>
                <span>
                    <i className="fas fa-phone"></i> 
                    <a href="#">+254 792 789 618</a>
                </span>
            </div>
            <div className="social-grey" style={{width:"80%",margin:"50px auto"}}>
                <ul style={{padding:"0px"}}>
                <li>
                    <a href="https://www.facebook.com/WildWomenExpeditions/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                                <li>
                    <a href="https://twitter.com/wild_women" target="_blank">
                    <i className="fab fa-twitter"></i>
                    </a>
                </li>
                                <li>
                    <a href="https://www.instagram.com/wildwomenexpeditions/" target="_blank">
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
                                <li>
                    <a href="https://www.pinterest.ca/wildwomenexpeditions/" target="_blank">
                    <i className="fab fa-pinterest-p"></i>
                    </a>
                </li>
                                <li>
                    <a href="https://www.linkedin.com/company/wild-women-expeditions" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                                <li>
                    <a className="you" href="https://www.youtube.com/c/WildWomenExpeditions" target="_blank">
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
