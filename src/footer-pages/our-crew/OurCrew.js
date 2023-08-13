import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Oval } from 'react-loader-spinner';

function OurCrew() {
    const [crewLoading, setCrewLoading] = useState(false)
    const [crewMembers, setCrewMembers] = useState([])

    useEffect(() => {
        setCrewLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/crew`)
                .then(response => response.json())
                .then(data => {
                    if(data.crew){
                        setCrewMembers(data.crew)
                        setCrewLoading(false)
                    }else if(data.alert){
                        setCrewLoading(false)
                        
                    }else if(data.err){
                        setCrewLoading(false)

                    }
            }).catch(error =>{
                
                setCrewLoading(false)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Our Crew</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-single-trip single-trips">
                <Navbar navbarDark={{height: 100}} />
                <div className="jumbotron-wrapper selected-route-jumbotron" style={{backgroundImage: `url(${require('../../assets/our-crew/cover.jpg')})`}}>
                    <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2">
                        <div className="inner-content text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="jumbotron-h1">
                                            Know Our Crew Members					
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
                                <h2 style={{textAlign: 'center'}}>Get to know our crew members</h2>
                                {
                                    crewLoading ?
                                        <div className="row d-flex justify-content-center" style={{height: '60vh', width: '100%'}}>
                                            <div className="col-md-18 flex-container-crew">
                                                <Oval
                                                    color="#106eea"
                                                    height={50}
                                                    width={50}
                                                    wrapperStyle={{}}
                                                    wrapperclassName=""
                                                    visible={true}
                                                    ariaLabel='oval-loading'
                                                    secondaryColor="black"
                                                    strokeWidth={2}
                                                    strokeWidthSecondary={2}
                                                    backgroundColor="#fcf9f9"
                                                />

                                            </div>
                                        </div> 
                                    :  
                                        <div className="products-area-wrapper gridView"> 
                                            {crewMembers.map(crew => 
                                                
                                                <div key={crew._id} style={{margin: '8px', padding: '8px', backgroundColor: '#f3f6fd' , maxWidth: '250px'}} >
                                                    
                                                    <div style={{fontSize: '14px', marginBottom: '8px'}} className="crew-image">
                                                        <img className="circular--square" src={crew.image}></img>
                                                        <div className="border-div no-pad">
                                                            <img style={{width: '100%', height: '100%'}} src={require('../../assets/wbr.png')} alt="..." ></img>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="product-cell status-cell">
                                                        <span style={{fontFamily: 'Montserrat', fontSize: "16px"}}>{crew.fullName}</span>
                                                    </div>
                                                    <div className="product-cell status-cell">
                                                        <span className="cell-label">Role:</span>
                                                        <span className="status active">{crew.role}</span>
                                                    </div>
                                                    <div className="product-cell status-cell">
                                                        <span className="cell-label">Email:</span>
                                                        <span className="status">{crew.email}</span>
                                                    </div>
                                                    <div className="product-cell status-cell">
                                                        <span className="cell-label">Contact:</span>
                                                        <span className="status">{crew.phone}</span>
                                                    </div>
                                                    <div className="product-cell status-cell">
                                                        <span>{crew.description}</span>
                                                    </div>
                                                    
                                                </div>  
                                            )}
                                            
                                        </div>  
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OurCrew