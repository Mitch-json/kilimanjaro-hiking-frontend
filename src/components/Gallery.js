import React from 'react'
import './Gallery.css'
import { Carousel } from 'react-responsive-carousel';

const images = [
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588903/kilimaj-hiking/gallery/20220531_143041_e7fay6.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690589179/kilimaj-hiking/gallery/20220530_120122_e1f3ul.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690589165/kilimaj-hiking/gallery/20220530_121116_euszwz.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588904/kilimaj-hiking/gallery/20220601_094054_otjv3x.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588901/kilimaj-hiking/gallery/20220602_141114_t8rbap.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588901/kilimaj-hiking/gallery/20220531_113525_v330go.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588895/kilimaj-hiking/gallery/20220601_082005_001_yzk2ne.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588888/kilimaj-hiking/gallery/20220601_093226_iwwdek.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588886/kilimaj-hiking/gallery/20220601_071632_vhfcpg.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588885/kilimaj-hiking/gallery/IMG_20220601_062149_gn1ngr.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588883/kilimaj-hiking/gallery/20220603_120259_nnf7io.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588884/kilimaj-hiking/gallery/IMG_20220601_060525_tckju0.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588876/kilimaj-hiking/gallery/original_b3a3a5b3-fc99-4d0b-8e04-175a09c5b178_20220528_143917_be1xrc.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588874/kilimaj-hiking/gallery/20220531_143041_biogk0.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588867/kilimaj-hiking/gallery/20220601_082005_001_jrk1gc.jpg'
    },
    {
        link: 'https://res.cloudinary.com/dwxzlruyd/image/upload/v1690588714/kilimaj-hiking/gallery/IMG_20220601_062155_vzdu0l.jpg'
    }
]

function Gallery() {
    return (
        <div id="drip-ef-221589843" style={{backgroundColor: 'white'}}>
            <h3 style={{fontSize: '40px',marginTop: '0px'}}>Gallery</h3>
            
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={true} showIndicators={false} transitionTime={1000}>
                {
                    images.map(image => 
                        <div key={image.link} className="feature-img-wrap carousel-slide-caption-gallery">
                            <img src={image.link} alt="" className="img-responsive center-block routes-images gallery-images"></img>
                            <div className="border-div gallery-border-div no-pad">
                                <img src="https://res.cloudinary.com/dwxzlruyd/image/upload/v1690678159/kilimaj-hiking/white-photo-border-triplisting_yzx736.png" alt="..." className="img-responsive center-block gallery-images"></img>
                            </div>
                        </div>
                    
                    )
                }
                
            </Carousel>
        </div>
    )
}

export default Gallery
