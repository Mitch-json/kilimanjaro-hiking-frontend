import React from 'react'
import './Testimonials.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
    return (
        <div id="drip-ef-221589843">
            <h3 style={{fontSize: '40px',marginTop: '0px'}}>TESTIMONIALS</h3>
            
            <Carousel autoPlay={true} swipeable={false} infiniteLoop={true} interval={3000} showStatus={false} showIndicators={false} transitionTime={500}>
                <div className="carousel-slide-caption">
                    <h3>Looking back at the 90-year old woman in the mirror, we won’t be wishing we’d been busier… we’ll be spending time in the peak memories of our lives.</h3>
                    <div className="testimonial-source">
                        <h3><strong>Kari</strong></h3>
                    </div>
                </div>
                <div className="carousel-slide-caption">
                    <h3>Looking back at the 90-year old woman in the mirror, we won’t be wishing we’d been busier… we’ll be spending time in the peak memories of our lives.</h3>
                    <div className="testimonial-source">
                        <h3><strong>Arnold</strong></h3>
                    </div>
                </div>
                <div className="carousel-slide-caption">
                    <h3>Looking back at the 90-year old woman in the mirror, we won’t be wishing we’d been busier… we’ll be spending time in the peak memories of our lives.</h3>
                    <div className="testimonial-source">
                        <h3><strong>Henry</strong></h3>
                    </div>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Testimonials
