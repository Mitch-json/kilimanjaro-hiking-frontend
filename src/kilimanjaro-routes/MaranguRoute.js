import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Oval } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MaranguItinerary from '../full-itinerary/MaranguItinerary'
import MaranguExperience from '../the-experience/MaranguExperience'
import MaranguDetails from '../trip-details/MaranguDetails'

function MaranguRoute() {
    const [visibleCol, setVisibleCol] = useState("experience")
    const [bookLoading, setBookLoading] = useState(false)
    const [tripDates, setTripDates] = useState([])
    const [selectedDate, setSelectedDate] = useState("")

    useEffect(() => {
        if (document.body.querySelector(`.active`)) {
            document.body.querySelector(`.active`).classList.remove('active')
        }
        document.body.querySelector(`#book`).classList.remove('active')

        document.body.querySelector(`#experience`).classList.add('active')

        setBookLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/trips/marangu`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.dates){
                    setTripDates(data.dates)
                    setBookLoading(false)   
                }else if(data.err){
                    setBookLoading(false)

                }else if(data.alert){
                    setBookLoading(false)

                }
            }).catch(error =>{
                console.log("Network connection error")
            })
    }, [])

    const changeColumn = (target) =>{
        setVisibleCol(target)
        if (document.body.querySelector(`.active`)) {
            document.body.querySelector(`.active`).classList.remove('active')
        }
    
        document.body.querySelector(`#${target}`).classList.add('active')
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <Helmet>
                <title>Marangu Route</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-single-trip single-trips">
                <Navbar navbarDark={{height: 100}} />
                <div className="jumbotron-wrapper selected-route-jumbotron" style={{backgroundImage: `url('https://res.cloudinary.com/dwxzlruyd/image/upload/v1690675033/kilimaj-hiking/marangu/cover/20220530_072012_nha4kq.jpg')`}}>
                    <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2">
                        <div className="inner-content text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="jumbotron-h1">
                                            Expedition through the Marangu Route						
                                        </h1>
                                        <h2 className="subheading jumbotron-subheading-selected-route text-uppercase">
                                            Mount Kilimanjaro
                                        </h2>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="section main-content">
                    <div className="container">
                        <div className="section-inner">
                            <ul className="nav nav-tabs font-block-style" role="tablist">
                                <li id="experience" >
                                    <a onClick={(e)=> changeColumn('experience')} >The Experience</a>
                                </li>
                                <li id="itinerary">
                                    <a onClick={(e)=> changeColumn('itinerary')} >Full Itinerary</a>
                                </li>
                                <li id="details" >
                                    <a onClick={(e)=> changeColumn('details')} >Trip Details</a>
                                </li>
                                <li id="book" >
                                    <a onClick={(e)=> changeColumn('book')} >Book Now</a>
                                </li>
                                {/* <li role="hotlist" className="hotlist-trip" id="hotlist-trip">
                                    <a>Join Hotlist</a>
                                </li>            */}
                            </ul>
                        </div>
                        <div>
                            <div className="col-sm-7" style={{marginBottom: "40px"}}>
                                {
                                    visibleCol === 'experience' ?
                                        <MaranguExperience />
                                    :
                                        visibleCol === 'itinerary' ?
                                            <MaranguItinerary />
                                        :
                                            visibleCol === 'details' ?
                                                <MaranguDetails />
                                            :
                                                <></>
                                }
                            </div>
                            <div className="col-sm-5">
                                <div className="sidebar-wrap">
                                    <div className="booking-details-panel font-block-style">
                                        <ul className="list-group" style={{marginBottom:"0px", marginTop:"0px"}}>
                                            <li className="list-group-item text-uppercase single-trip-dates new">
                                                <div className="booking-title" style={{fontFamily:'Montserrat', fontSize: "16px", fontWeight: "bold", color: "#ffffff", marginTop: "15px", letterSpacing: "2px"}}>
                                                    <center>  Select a Date and Book </center> 
                                                </div>

                                                <form onSubmit={handleSubmit} name="cityselect" className="cityselect_form desktop-version" data-hs-cf-bound="true">
                                                    {
                                                        bookLoading?
                                                            <center>
                                                                <div className="row d-flex justify-content-center" style={{ width: '100%'}}>
                                                                    <div className="col-md-18 flex-container5">
                                                                        <Oval
                                                                            color="white"
                                                                            height={30}
                                                                            width={30}
                                                                            wrapperStyle={{}}
                                                                            wrapperclassName=""
                                                                            visible={true}
                                                                            ariaLabel='oval-loading'
                                                                            secondaryColor="white"
                                                                            strokeWidth={2}
                                                                            strokeWidthSecondary={2}
                                                                            backgroundColor="#fcf9f9"
                                                                        />

                                                                    </div>
                                                                </div> 
                                                            </center>
                                                        :
                                                            <center>     
                                                                <select name="menu" id="menu" placeholder="Select Trip Date To Book" required value={selectedDate} onChange={(e)=>{ setSelectedDate(e.target.value); console.log(e.target.value)}}>
                                                                    <option selected="selected">
                                                                        Select Available Trip Date To Book
                                                                    </option>
                                                                    {
                                                                        tripDates.map(date => 
                                                                            <option key={date._id} value={date.date}>  
                                                                                {date.date}
                                                                            </option>
                                                                        
                                                                        )
                                                                    }
                                                                </select>
                                                                <div className="find-new-2" style={{paddingTop: '20px'}}>
                                                                    {
                                                                        selectedDate?
                                                                            <Link className="book-now" style={{backgroundColor: '#ffffff', borderColor: '#ffffff', fontWeight: 'bold'}} to={`/book-now?route=marangu&selected_date=${selectedDate}`}>
                                                                                Book Now
                                                                            </Link>
                                                                        :
                                                                            <button className="book-now" style={{backgroundColor: '#ffffff', borderColor: '#ffffff', fontWeight: 'bold'}} type="submit">
                                                                                Book Now
                                                                            </button>
                                                                            
                                                                    }
                                                                </div>
                                                            </center>
                                                    }
                                                </form>                              
                                            </li>
                                            <li className="list-group-item justify-me new-boxes" style={{marginTop:"0px"}}>
                                                <div className="inner">
                                                    <div className="text-uppercase">
                                                        <div className="booking-top">
                                                            Starting At
                                                        </div>
                                                        <div className="booking-bottom padding-top">
                                                            <span>$4,495</span>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="inner">
                                                    <div className="booking-top">
                                                        Deposit
                                                    </div>
                                                    <div className="booking-bottom padding-top">
                                                        <span>$495</span> 
                                                    </div>
                                                </div>

                                                <div className="inner" style={{borderRight: "0px"}}>
                                                    <div className="booking-top">
                                                        Duration
                                                    </div>
                                                    <div className="booking-bottom padding-top">
                                                        <span>7 DAYS</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item justify-me new-boxes adc-trip" style={{marginTop:"0px"}}>
                                                <div className="inner" style={{borderRight: "0px"}}>
                                                    <div className="booking-bottom">
                                                        <i>🇺🇸</i>
                                                        <span>USD PRICE</span>
                                                    </div>
                                                    <div className="booking-top padding-top">
                                                        FOREIGN EXCHANGE FEES MAY APPLY
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="well well-inverse new-back" style={{backgroundColor: "#1e1e1e", borderTop: "6px solid white"}}>
                                        <h3 className="text-uppercase font-block-style" style={{textAlign: "left", fontSize: "13px", fontFamily: "Montserrat-Light, Montserrat ", fontWeight: "400", color: "rgba(255, 255, 255, 0.5)", letterSpacing: "2px", marginLeft: "38px"}}>
                                            What's Included
                                        </h3>
                                        <ul>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>All transfers (to airport, hotels)</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>6 nights shared accommodation (4 nights yurts, 2 nights hotel)</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>Awesome medically-trained naturalist and female-identifying guides</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>All park entry fees</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>All activities and required equipment (rafting, canyoneering)</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>All decadent meals from riverside picnics to downtown Moab restos</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <span style={{fontWeight: "400"}}>The time of your life!</span>
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <b>Not Included: </b>Guide gratuities
                                            </li>
                                            <li style={{fontWeight: "400"}} aria-level="1">
                                                <strong>Please note:</strong> Single accommodations are not available for this trip
                                            </li>
                                            <li>All applicable taxes are included in the trip price</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MaranguRoute
