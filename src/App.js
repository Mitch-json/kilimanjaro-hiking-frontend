import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './App.css';
import Crew from './components/Crew';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
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
          
            {/* <div style={{position: "relative"}} className="for-mobile">
              <img src="https://wildwomenexpeditions.com/wp-content/uploads/fullsizeoutput_a02-1.jpeg"></img>
              <div className="mframe" style={{background: "url(https://wildwomenexpeditions.com/wp-content/themes/bootstrap3.3.5/images/WW_HOME_FRAME.png)"}}></div>
            </div> */}
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
      <Footer />
    </div>
    
    
  );
}

export default App;