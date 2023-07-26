import React from 'react'

function NavbarRest() {
    return (
        <div style={{backgroundColor: 'rgba(39,37,38, 0.6)'}} id="toggle-nav-full" className="navbar-wrapper" data-spy="affix" data-offset-top="100" data-offset-bottom="100">
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

export default NavbarRest