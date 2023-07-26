import React, { useEffect } from 'react'
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
              
              <a className="navbar-brand" href="https://wildwomenexpeditions.com">
                <img src=
                  "https://wildwomenexpeditions.com/wp-content/uploads/newlogo-1.png"
                  className="img-responsive" alt=
                  "Wild Women Expeditions logo. "></img>

              </a>
            </div>
            
          </nav>
        </div>
      </div>
    )
}

export default Navbar
