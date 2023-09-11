import React from 'react'
import './Testimonials.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
    return (
        <div id="drip-ef-221589843" className="reviews-back">
            <h2 style={{marginTop: '0px', letterSpacing: '3px'}}>Client Testimonials</h2>
            
            <Carousel autoPlay={true} swipeable={false} infiniteLoop={true} interval={3000} showStatus={false} showIndicators={false} transitionTime={500}>
                <div className="carousel-slide-caption">
                    <h3>The Kilimanjaro experience was nothing short of magical. The camaraderie among fellow hikers, the knowledgeable guides, and the stunning vistas made this journey unforgettable. Truly a bucket-list item for any nature lover!</h3>
                    <div className="testimonial-source">
                        <h3><strong>Mark</strong></h3>
                    </div>
                </div>
                <div className="carousel-slide-caption">
                    <h3>Hiking Kilimanjaro was a soul-stirring experience. The sheer determination and encouragement from our guides and fellow hikers pushed us to new heights, both physically and mentally. The sunrise from the summit was an indescribable reward.</h3>
                    <div className="testimonial-source">
                        <h3><strong>Arnold</strong></h3>
                    </div>
                </div>
                <div className="carousel-slide-caption">
                    <h3>Kilimanjaro was a true test of perseverance and a triumph of the human spirit. The sense of accomplishment upon reaching the Uhuru Peak was unlike anything else. The memories and friendships forged during this journey will last a lifetime.</h3>
                    <div className="testimonial-source">
                        <h3><strong>Henry</strong></h3>
                    </div>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Testimonials
