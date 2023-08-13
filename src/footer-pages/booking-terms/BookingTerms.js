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
                                
                                <h2>1. Booking and Payments:</h2>
                                <p>A non-refundable deposit is required to secure your booking.</p>
                                <p>Full payment must be made before the expedition start date.</p>
                               
                                <h2>2. Cancellation and Refunds:</h2>
                                <p>Cancellations must be made in writing. Deposits are non-refundable.</p>
                                <p>Refunds are subject to our cancellation policy, varying based on the cancellation timeline.</p>

                                <h2>3. Health and Fitness:</h2>
                                <p>Clients must provide accurate health information before the expedition. It's your responsibility to consult a medical professional for advice on your fitness and health readiness.</p>

                                <h2>4. Travel Insurance:</h2>
                                <p>Comprehensive travel insurance, including coverage for medical emergencies is recommended but not mandatory.</p>

                                <h2>5. Itinerary Changes:</h2>
                                <p>Itineraries are subject to change due to weather, safety, or unforeseen circumstances.</p>
                                <p>The crew chief has the final say on route adjustments for safety reasons.</p>
                            
                                <h2>6. Client Conduct:</h2>
                                <p>Respect for local culture, guides, crew members, and fellow climbers is an integral part of our company policy. </p>
                                <p>All climbers will Follow guidelines provided by our team for safety and environmental protection.</p>
                            
                                <h2>7. Liability and Risks:</h2>
                                <p>Climbing Kilimanjaro carries inherent risks. Clients must sign a liability waiver.</p>
                                <p>We prioritize safety, but clients acknowledge the risks associated with high-altitude trekking.</p>
                            
                                <h2>8. Force Majeure:</h2>
                                <p>We're not liable for delays or changes caused by unforeseen events like natural disasters, strikes, or political unrest.</p>
                            
                                <h2>9. Environmental Responsibility:</h2>
                                <p>We lead a Leave no trace policy that requires climbers to adhere to responsible trekking practices to minimize impact on the environment.</p>
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