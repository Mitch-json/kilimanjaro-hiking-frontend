import React from 'react'
import NavbarRest from './components/NavbarRest'
import "./KilimanjaroRoutes.css"

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function KilimanjaroRoutes() {
    return (
        <div>
            <Helmet>
                <title>Kilimanjaro Routes</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-categories">
                <Navbar navbarDark={{height: 100}} />
                <div className="section">
                    <div id="drip-ef-221589843" className="afr-gif-container" style={{backgroundColor: 'white'}}>
                        <div className="feature-img-wrap afr-gif">
                            <img src={require('./assets/afr.gif')} alt="" className="img-responsive center-block afr-gif-img"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div id="map" className="map-content">
                                <div className="container">
                                    <div className="results-wrap">
                                        <div className="row">
                                            <div className="col-sm-12 col-sm-12-margin-right">
                                                <div className="refine-message-wrap">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-sm-12-margin-right">
                                                            <div className="search-terms">
                                                                <div style={{paddingLeft: "15px"}}>
                                                                    Showing <span className="font-block-style">all </span> routes in <span className="font-block-style">Mount Kilimanjaro</span>
                                                                </div>
                                                                <div id="ajax-load-more" className="ajax-load-more-wrap default alm-0" >
                                                                    <ul aria-live="polite" aria-atomic="true" className="alm-listing alm-ajax alm-has-transition pull-right" >
                                                                        <div className="alm-reveal" style={{opacity: "1", height: "auto", outline: "none"}}>
                                                                            <div className="col-sm-6 ajaxloadmore">
                                                                                <div className="result-excerpt font-block-style">
                                                                                    <Link className="excerpt-wrap-link" to="/routes/selected/northern-circuit-route">
                                                                                        <div className="feature-img-wrap">
                                                                                            <img  src={require('./assets/routes/northern-circuit.jpg')} alt="" className="img-responsive center-block routes-images"></img>
                                                                                            <div className="border-div no-pad">
                                                                                                <img src={require('./assets/wb.png')} alt="..." className="img-responsive center-block"></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div className="excerpt text-center">
                                                                                        <Link className="excerpt-wrap-link" to="/routes/selected/northern-circuit-route">
                                                                                            <div style={{marginTop: '15px', marginBottom: '10px'}} className="text-uppercase">
                                                                                                <span className="text-underline">
                                                                                                    Northern Circuit Route					        		
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                        
                                                                                    </div> 					        
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-sm-6 ajaxloadmore">
                                                                                <div className="result-excerpt font-block-style">
                                                                                    <Link className="excerpt-wrap-link" to="/routes/selected/lemosho-route">
                                                                                        <div className="feature-img-wrap">
                                                                                            <img src={require('./assets/routes/lemosho.jpg')} alt="" className="img-responsive center-block routes-images"></img>
                                                                                            <div className="border-div no-pad">
                                                                                                <img src={require('./assets/wb.png')} alt="..." className="img-responsive center-block"></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div className="excerpt text-center">
                                                                                        <Link className="excerpt-wrap-link" to="/routes/selected/lemosho-route">
                                                                                            <div style={{marginTop: '15px', marginBottom: '10px'}} className="text-uppercase">
                                                                                                <span className="text-underline">
                                                                                                    Lemosho Route
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                        
                                                                                    </div> 					        
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-sm-6 ajaxloadmore">
                                                                                <div className="result-excerpt font-block-style">
                                                                                    <Link className="excerpt-wrap-link" to="/routes/selected/machame-route">
                                                                                        <div className="feature-img-wrap">
                                                                                            <img src={require('./assets/routes/machame.jpg')} alt="" className="img-responsive center-block routes-images"></img>
                                                                                            <div className="border-div no-pad">
                                                                                                <img src={require('./assets/wb.png')} alt="..." className="img-responsive center-block"></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div className="excerpt text-center">
                                                                                        <Link className="excerpt-wrap-link" to="/routes/selected/machame-route">
                                                                                            <div style={{marginTop: '15px', marginBottom: '10px'}} className="text-uppercase">
                                                                                                <span className="text-underline">
                                                                                                    Machame Route (“Whiskey” Route)					        		
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                        
                                                                                    </div> 					        
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-sm-6 ajaxloadmore">
                                                                                <div className="result-excerpt font-block-style">
                                                                                    <Link className="excerpt-wrap-link" to="/routes/selected/rongai-route">
                                                                                        <div className="feature-img-wrap">
                                                                                            <img src={require('./assets/routes/rongai.jpg')} alt="" className="img-responsive center-block routes-images"></img>
                                                                                            <div className="border-div no-pad">
                                                                                                <img src={require('./assets/wb.png')} alt="..." className="img-responsive center-block"></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div className="excerpt text-center">
                                                                                        <Link className="excerpt-wrap-link" to="/routes/selected/rongai-route">
                                                                                            <div style={{marginTop: '15px', marginBottom: '10px'}} className="text-uppercase">
                                                                                                <span className="text-underline">
                                                                                                    Rongai Route
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                        
                                                                                    </div> 					        
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-sm-6 ajaxloadmore">
                                                                                <div className="result-excerpt font-block-style">
                                                                                    <Link className="excerpt-wrap-link" to="/routes/selected/marangu-route">
                                                                                        <div className="feature-img-wrap">
                                                                                            <img src={require('./assets/routes/marangu.jpg')} alt="" className="img-responsive center-block routes-images"></img>
                                                                                            <div className="border-div no-pad">
                                                                                                <img src={require('./assets/wb.png')} alt="..." className="img-responsive center-block"></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div className="excerpt text-center">
                                                                                        <Link className="excerpt-wrap-link" to="/routes/selected/marangu-route">
                                                                                            <div style={{marginTop: '15px', marginBottom: '10px'}} className="text-uppercase">
                                                                                                <span className="text-underline">
                                                                                                    Marangu Route (“Coca-Cola” Route)
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                        
                                                                                    </div> 					        
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-sm-6 ajaxloadmore">
                                                                                <div className="result-excerpt font-block-style">
                                                                                    <Link className="excerpt-wrap-link" to="/routes/selected/umbwe-route">
                                                                                        <div className="feature-img-wrap">
                                                                                            <img src={require('./assets/routes/umbwe.jpg')} alt="" className="img-responsive center-block routes-images"></img>
                                                                                            <div className="border-div no-pad">
                                                                                                <img src={require('./assets/wb.png')} alt="..." className="img-responsive center-block"></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                    <div className="excerpt text-center">
                                                                                        <Link className="excerpt-wrap-link" to="/routes/selected/umbwe-route">
                                                                                            <div style={{marginTop: '15px', marginBottom: '10px'}} className="text-uppercase">
                                                                                                <span className="text-underline">
                                                                                                    Umbwe Route
                                                                                                </span>
                                                                                            </div>
                                                                                        </Link>
                                                                                        
                                                                                    </div> 					        
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default KilimanjaroRoutes
