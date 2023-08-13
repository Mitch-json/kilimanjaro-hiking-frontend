import React from 'react'
import './Gallery.css'
import { Carousel } from 'react-responsive-carousel';

const images = [
    {
        key: '1',
        link: `${require('../assets/gallery/1.jpg')}`
    },
    {
        key: '2',
        link: `${require('../assets/gallery/2.jpg')}`
    },
    {
        key: '3',
        link: `${require('../assets/gallery/3.jpg')}`
    },
    {
        key: '4',
        link: `${require('../assets/gallery/4.jpg')}`
    },
    {
        key: '5',
        link: `${require('../assets/gallery/5.jpg')}`
    },
    
]

function Gallery() {
    return (
        <div id="drip-ef-221589843" className="gallery-back" style={{backgroundColor: 'white'}}>
            <h3 style={{fontSize: '30px',marginTop: '10px', fontFamily: 'Montserrat'}}>Gallery</h3>
            
            <Carousel autoPlay={true} swipeable={false} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={true} showIndicators={false} transitionTime={1000}>
                {
                    images.map(image => 
                        <div key={image.key} className="feature-img-wrap carousel-slide-caption-gallery">
                            <img src={image.link} alt="" className="img-responsive center-block routes-images gallery-images"></img>
                            <div className="border-div gallery-border-div no-pad">
                                <img src={require('../assets/wb.png')} alt="..." className="img-responsive center-block gallery-images"></img>
                            </div>
                        </div>
                    
                    )
                }
                
            </Carousel>
        </div>
    )
}

export default Gallery
