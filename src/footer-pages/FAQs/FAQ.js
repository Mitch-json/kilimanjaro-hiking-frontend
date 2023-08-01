import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function FAQ() {
    const displayDetail = (detailID) => {
        console.log(document.body.querySelector(`#${detailID}`).classList[1])
        if(document.body.querySelector(`#${detailID}`).classList[1]){
            document.body.querySelector(`#${detailID}`).classList.remove('ac-text-visible')
        }else{

            document.body.querySelector(`#${detailID}`).classList.add('ac-text-visible')
        }
    }
    return (
        <div>
            <Helmet>
                <title>FAQs</title>
            </Helmet>
            <div className="template-wrapper template-wrapper-single-trip single-trips">
                <Navbar navbarDark={{height: 100}} />
                <div className="jumbotron-wrapper selected-route-jumbotron" style={{backgroundImage: `url(${require('../../assets/FAQs/cover.jpg')})`}}>
                    <div className="jumbotron jumbotron-wrapper-inner jumbotron-wrapper-inner-2">
                        <div className="inner-content text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="jumbotron-h1">
                                            Frequently Asked Questions				
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
                                <h2>Frequently Asked Questions</h2>
                                
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade in active" id="the-experience">
                                        <div className="ac">
                                            <label className="ac-label" onClick={(e)=>displayDetail('ac-1')} >Which Route is the least difficult ? </label>
                                            <article id="ac-1" className="ac-text">
                                                <ul>
                                                    <li>
                                                        <Link to="/routes/selected/umbwe-route" target="_blank" >Umbwe Route</Link>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                        <div className="ac">
                                            <label className="ac-label" onClick={(e)=>displayDetail('ac-2')} >I have asthma, will i be able to climb Kilimanjaro ?</label>
                                            <article id="ac-2" className="ac-text">
                                                <ul>
                                                    <li>
                                                        Yes, you will be able to climb Kilimanjaro. Our crew also has medics that will aid you 
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
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

export default FAQ