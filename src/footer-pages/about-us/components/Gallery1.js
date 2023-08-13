import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../AboutUs.css'

const images = [
    {
        key: '1',
        link: `${require('../../../assets/about-us/gallery-1/1.jpg')}`
    },
    {
        key: '2',
        link: `${require('../../../assets/about-us/gallery-1/2.jpg')}`
    },
    
]

function Gallery1() {
    return (
        <div id="drip-ef-221589843" className="about-gallery" style={{backgroundColor: 'white'}}>
            <Carousel autoPlay={true} swipeable={false} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={false} showIndicators={false} transitionTime={1000}>
                {
                    images.map(image => 
                        <div key={image.key} className="feature-img-wrap carousel-slide-caption-experience">
                            <img src={image.link} alt="" className="img-responsive center-block routes-images experience-images"></img>
                            <div className="border-div experience-border-div no-pad">
                                <img src={require('../../../assets/wb.png')} alt="..." className="img-responsive center-block experience-images"></img>
                            </div>
                        </div>
                    
                    )
                }
                
            </Carousel>
        </div>
    )
}

export default Gallery1
