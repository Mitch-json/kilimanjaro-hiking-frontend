import React from 'react'
import './Gallery.css'
import { Carousel } from 'react-responsive-carousel';

function Gallery() {
    return (
        <div id="drip-ef-221589843" style={{backgroundColor: 'white'}}>
            <h3 style={{fontSize: '40px',marginTop: '0px'}}>Gallery</h3>
            
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={true} showIndicators={false} transitionTime={1000}>
                <div className="feature-img-wrap carousel-slide-caption-gallery">
                    <img src="https://lenchadasafaris.com/wp-content/uploads/2016/12/Umbwe-Route.jpg" alt="" className="img-responsive center-block routes-images gallery-images"></img>
                    <div className="border-div gallery-border-div no-pad">
                        <img src="https://wildwomenexpeditions.com/wp-content/themes/bootstrap3.3.5/images/white-photo-border-triplisting.png" alt="..." className="img-responsive center-block gallery-images"></img>
                    </div>
                </div>
                <div className="feature-img-wrap carousel-slide-caption-gallery">
                    <img src="https://lenchadasafaris.com/wp-content/uploads/2016/12/Umbwe-Route.jpg" alt="" className="img-responsive center-block routes-images gallery-images"></img>
                    <div className="border-div gallery-border-div no-pad">
                        <img src="https://wildwomenexpeditions.com/wp-content/themes/bootstrap3.3.5/images/white-photo-border-triplisting.png" alt="..." className="img-responsive center-block gallery-images"></img>
                    </div>
                </div>
                <div className="feature-img-wrap carousel-slide-caption-gallery">
                    <img src="https://lenchadasafaris.com/wp-content/uploads/2016/12/Umbwe-Route.jpg" alt="" className="img-responsive center-block routes-images gallery-images"></img>
                    <div className="border-div gallery-border-div no-pad">
                        <img src="https://wildwomenexpeditions.com/wp-content/themes/bootstrap3.3.5/images/white-photo-border-triplisting.png" alt="..." className="img-responsive center-block gallery-images"></img>
                    </div>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Gallery
