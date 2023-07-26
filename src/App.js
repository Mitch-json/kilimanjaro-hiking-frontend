import { Link } from 'react-router-dom';
import './App.css';
import Crew from './components/Crew';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <div className="template-wrapper-frontpage template-wrapper">
    
        <Navbar navbarDark={{height: 100}} />
        <div className="jumbotron-wrapper home-wrapper home-jumbotron-wrapper">
          <div className="jumbotron jumbotron-wrapper-inner" style={{backgroundColor: "transparent", zIndex: '999'}}>
            <div className="inner-content text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 style={{color: "white"}}>Amazing Outdoor Adventures for All Women</h1>
                  </div>
                </div>
              </div>
            </div>
          
            <div style={{position: "relative"}} className="for-mobile">
              <img src="https://wildwomenexpeditions.com/wp-content/uploads/fullsizeoutput_a02-1.jpeg"></img>
              <div className="mframe" style={{background: "url(https://wildwomenexpeditions.com/wp-content/themes/bootstrap3.3.5/images/WW_HOME_FRAME.png)"}}></div>
            </div>
            <div className="home-menu-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="find-new">
                      
                      <Link to="/routes">
                        FIND YOUR ADVENTURE
                      </Link>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-button text-right hidden-xs">
              <div className="btn-blue-wrap display-inline text-center"></div>
            </div>
          </div>
        </div>
        <video playsInline autoPlay muted loop id="myVideo" className="for-desktop" >
          <source src="https://wildwomenexpeditions.com/wp-content/uploads/Wild-Women-Experience_home.mp4" type="video/mp4"></source>
        </video>
      
      </div>
      <Gallery />
      {/* <Testimonials /> */}
      <Crew />
      <div className="footer-featured">
        <div className="container">
          <div id="menu-footer-menu-updated">
            <p>
              <Link to="/terms-and-conditions/">Booking Terms </Link>|   
              <Link to="/creating-a-safe-space/">COVID Safety </Link>|  
              <Link to="/privacy-policy/">Privacy Policy </Link>|
              <Link to="https://wildwomenexpeditions.com/a-little-about-us/">About Us</Link>|
              <Link to="https://wildwomenexpeditions.com/guide">Guides</Link>|
              <Link to="#">Activity</Link>
            </p>
            <p>
              <Link to="#">Flexible Booking</Link> |
              <Link to="#">Travel Insurance</Link> |
              <Link to="#">FAQ</Link> |
              <Link to="#">Videos</Link> |
              <Link to="#">Podcast</Link> |
              <Link to="#">Blog</Link> |
              <Link to="#">Destinations</Link> |
              <Link to="#">Adventure Calendar 2023</Link> |
              <Link to="#">Adventure Calendar 2024</Link>              
            </p>
            <p>
              <Link to="/admin/login">Admin Login</Link>
            </p>
          </div>
          <div className="subtle-footer">
            <p>
							  <a title="Contact Us" href="https://wildwomenexpeditions.com/contact-us-2/"><u>Contact Us</u></a>
            </p>
            <span>
              <i className="fas fa-envelope"></i> 
              <a href="mailto:adventure@wildwomenexpeditions.com">adventure@wildwomenexpeditions.com</a>
            </span>
            <span>
              <i className="fas fa-phone"></i> 
              <a href="tel:1 (888) 993-1222">1 (888) 993-1222</a>
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
    </div>
    
    
  );
}

export default App;