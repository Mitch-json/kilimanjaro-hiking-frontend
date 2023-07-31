import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function BookingTerms() {
    return (
        <div>
            <Helmet>
                <title>Booking Terms and Conditions</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-single-trip single-trips">
                <Navbar navbarDark={{height: 100}} />
                <div className="jumbotron-wrapper selected-route-jumbotron" style={{backgroundImage: `url(${require('../../assets/booking-terms/cover.jpg')})`}}>
                    <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2">
                        <div className="inner-content text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="jumbotron-h1">
                                            Booking Terms and Conditions				
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
                                <h2>BOOKING TERMS & CONDITIONS</h2>
                                <p>These Booking Terms & Conditions (the “Terms”) will become the terms and conditions of the agreement between 7690037 Canada Inc. cob Wild Women Expeditions (“WWE”) and you, and anyone for whom you request WWE book a trip (together referred to as “Client”), so please take time to read them.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default BookingTerms