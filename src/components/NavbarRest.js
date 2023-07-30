import React from 'react'
import { Link } from 'react-router-dom'

function NavbarRest() {
    return (
        <div style={{backgroundColor: 'rgba(39,37,38, 0.6)'}} id="toggle-nav-full" className="navbar-wrapper" data-spy="affix" data-offset-top="100" data-offset-bottom="100">
            <div className="container">
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="navbar-header">
                
                <Link className="navbar-brand" to="/">
                    <img src={require('../assets/logo/KILIMAJ-HIKING-LOGO.png')}
                    className="img-responsive" alt=
                    "Kilimaj-hiking logo. " style={{maxWidth: '500px'}}></img>

                </Link>
                </div>
                
            </nav>
            </div>
        </div>
    )
}

export default NavbarRest