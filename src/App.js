import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './App.css';
import BookConsultation from './components/BookConsultation';
import Crew from './components/Crew';
import Footer from './components/Footer';
import GalleryH from './components/GalleryH';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="template-wrapper-frontpage template-wrapper">
    
        <Navbar navbarDark={{height: 100}} />
        <div className="jumbotron-wrapper jumbotron-wrapper-bg" style={{height: '100%',backgroundImage: `url(${require('./assets/1.jpg')})`}}>
          <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2" style={{backgroundColor: "transparent", zIndex: '999'}}>
            <div className="inner-content text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 style={{color: "white"}}>Amazing Adventures to Mount Kilimajaro</h1>
                  </div>
                </div>
              </div>
            </div>
          
            
            <div className="home-menu-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="find-new">
                      
                      <Link to="/routes">
                        FIND YOUR ADVENTURE
                      </Link>
                      <a className="side-by-side-btn" href="#book-consultation" style={{marginLeft: '10px'}}>
                        Book Free Online Consultation
                      </a>
                    </div>
                    
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="home-menu-wrap top-down-btn">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="find-new">
                      
                      <a href="#book-consultation">
                        Book Free Online Consultation
                      </a>
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
        {/* <video playsInline autoPlay muted loop id="myVideo" className="for-desktop" >
          <source src="https://wildwomenexpeditions.com/wp-content/uploads/Wild-Women-Experience_home.mp4" type="video/mp4"></source>
        </video> */}
      
      </div>
      <GalleryH />
      <div id="book-consultation">
        <BookConsultation />
      </div>
      <Testimonials />
      <Footer />
    </div>
    
    
  );
}

export default App;