import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function ContactUs() {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-single-trip single-trips">
                <Navbar navbarDark={{height: 100}} />
                <div className="jumbotron-wrapper selected-route-jumbotron" style={{backgroundImage: `url(${require('../../assets/contact-us/cover.jpg')})`}}>
                    <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2">
                        <div className="inner-content text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="jumbotron-h1">
                                            Contact Us 					
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
                                <h2>Have a question or need help?</h2>
                                <p>You might be able to find the answer to your question on our ‘Frequently Asked Questions’ page:</p>
                                <p>Link</p>


                                <h2>Contact Details</h2>
                                <p>We can be reached by phone at: 1-888-993-1222.  Give us a call! We’re always happy to chat</p>
                                <p>
                                    Office hours:
                                    <br></br>
                                    Monday – Friday  |  7am – 7pm EST
                                </p>


                                <h2>Email Us Instead</h2>
                                <p>Would like to email us instead of calling?</p>
                                <p>
                                    If you have any general enquiries or would like to book, you can email us at
                                    <br></br>
                                    kilimajhiking@gmail.com
                                </p>
                                <p>
                                    If you have questions about your upcoming trip, you can email us at
                                    <br></br>
                                    kilimajhiking@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ContactUs