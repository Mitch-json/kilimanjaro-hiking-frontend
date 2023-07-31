import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Gallery1 from './components/Gallery1'
import './AboutUs.css'

function AboutUs() {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-single-trip single-trips">
                <Navbar navbarDark={{height: 100}} />
                <div className="jumbotron-wrapper selected-route-jumbotron" style={{backgroundImage: `url(${require('../../assets/about-us/cover.jpg')})`}}>
                    <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2">
                        <div className="inner-content text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="jumbotron-h1">
                                            Who are we ?						
                                        </h1>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="section main-content f-pages">
                    <div className="container">
                        <div className="section-inner">
                            <div className="col-sm-12">
                                <Gallery1 />
                                <h2>You’re cordially invited to bet on yourself.</h2>
                                <p>Don’t worry, you’ll have a cheering squad of women as the ace up your sleeve. (Or as we call it around here, your wild card.)</p>
                                <p>As the largest women’s travel company in the world, we’ve spent the last 30 years creating safe, empowering, and exhilarating ways for women to escape the ordinary and explore the world. It’s wild (wink) to think that we started as an all-women canoe tripping company in Canada in 1991 and today you can find us in over 30 countries across every continent.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs
