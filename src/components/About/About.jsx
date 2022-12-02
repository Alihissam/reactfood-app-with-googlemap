import React from 'react'
import './about.css'
import about from '../../images/about.jpg';
import about2 from '../../images/about2.jpg';
import about3 from '../../images/about3.jpg';
import about5 from '../../images/about5.jpg';

const About = () => {
    return (
        <>
            <div id='about'>
                <section className="about-section" id='about' >
                    <div className="boxes">
                        <div className="middle text-center">
                            <h4 className="title">Explore Tasty..</h4>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="heading wrapper">
                                    <h1 className="heading">Learn About Tasty</h1>
                                    <p className="paragraph" style={{ margin: "1rem 0" }}>
                                        Organic Food is grown without the usage of synthetic chemicals and preservatives such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's) Organic food produces fresh meat, dairy products which can be used in your daily routine. Our clients have been with us since decade and never got any complain in the terms of product quality ,
                                        taste or cost. We are one ideal producers of organic foods and fruits right now in Pakistan.
                                    </p>
                                    <button type="button" className="btn btn-danger">Find Us</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={about} alt="about" className='col-md-6 float-md-end mb-3 ms-md-3 about-picks' />
                                <img src={about2} alt="about2" className="col-md-6 float-md-end mb-3 ms-md-3 about-2picks" />
                                <div className="row">
                                    <img src={about3} alt="about3" className="col-md-6 float-md-end mb-3 ms-md-3 about-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-section">
                                    <img src={about5} alt="about5" className="image-fluid about-5" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h1 class="learn" >Fresh Vegetables for YOU.</h1>
                                <p class="para" >Organic Food is grown without the usage of synthetic chemicals and preservatives such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's)</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About
