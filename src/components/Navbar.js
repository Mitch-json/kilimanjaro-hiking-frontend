import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {
    useEffect(() => {
      if (props.navbarDark) {
          window.addEventListener("scroll", makeNavbarDark);
      }
      return function cleanup() {
          if (props.navbarDark) {
            window.removeEventListener("scroll", makeNavbarDark);
          }
      };
    }, [])

    const makeNavbarDark = () => {
        const { navbarDark } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > navbarDark.height) {
            // document.body.getElementsByTagName("nav")[0].classList.remove(classes[color]);
            document.body.querySelector(`.nav-selector`).classList.add('dark-nav')
          } else {
            document.body.querySelector(`.nav-selector`).classList.remove('dark-nav')
            
        }
    };
    return (
      <div id="toggle-nav-full" className="navbar-wrapper nav-selector" data-spy="affix" data-offset-top="100" data-offset-bottom="100">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-static-top">
            <div className="navbar-header">
              
              <Link className="navbar-brand" to="/">
                <img src={require('../assets/logo/afr.png')}
                  className="img-responsive nav-logo-img" alt=
                  "Kilimaj-hiking logo. " ></img>

              </Link>
              <Link className="navbar-brand navbar-brand-2" to="/">
                <img src={require('../assets/logo/afr3.png')}
                  className="img-responsive nav-logo-img-2" alt=
                  "Kilimaj-hiking logo. " ></img>

              </Link>
            </div>
            
          </nav>
        </div>
      </div>
    )
}

export default Navbar
