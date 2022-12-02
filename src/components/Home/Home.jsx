import React from 'react'
import './home.css'
import shef from '../../images/shef.png';
import hom from '../../images/hom.png';
import card from '../../images/card.png';
import card2 from '../../images/card2.png';
import card3 from '../../images/card3.png';
import card4 from '../../images/card4.png';
import About from '../About/About';
import Toppicks from '../Toppicks/Toppicks';
import Findus from '../Findus/Findus';

const Home = () => {
    return (
        <>
            <section className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="main-section col-lg-6 ">
                            <div className="text-wrapper ">
                                <div className="heading">
                                    <h2 className="main-content">Just Eat <span className="text-title"
                                        style={{ color: "green" }}>Healthy </span>Food to Live Longer &
                                        <span className="title-text" style={{ color: "green" }}> Aspiring Life</span></h2>
                                    <span className="title-decritpion" style={{ color: "gray" }}>Enjoy a healthy Life by eating healthy foods that have
                                        extraordinary flavours which make your life healthier day by day, prepared by our top chefs
                                        with extra care and <span style={{ color: "red", font: "large" }}> LOVE </span> especially for you!!</span><br />
                                    <button type="button" className="btn btn-success order-now" style={{ color: "white", width: "120px", height: "42px" }}>Order Now</button>
                                    <div className="image-wrapper">
                                        <div className="center">
                                            <div className="dialog-1">
                                                <div className="left-point">
                                                </div>
                                            </div>
                                            <div className="dialog-2">
                                                <h5 className="chef"> Recommended By Top Chefs to ensure your health!!</h5>
                                                <div className="right-point"></div>
                                            </div>
                                        </div>
                                        <img src={shef} alt="shef" className="shef-image image-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6">
                            <div className="image-section image-fluid">
                                <img src={hom} alt="hom" className="image-fluid hom-image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-2 mt-5 pt-5">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="title-section">
                                <div className="col-md-auto text-center"><h1 className="why"> Why Choose US?</h1>
                                </div>
                                <p className="row justify-content-md-center text-center"> Organic Food is grown without the usage of preservatives and is free of Toxic Chemicals</p>
                            </div>
                        </div>
                        <div className="card-group mx-auto">
                            <div className="card">
                                <img src={card} alt="card" className="card-image-top mx-auto" alt=""
                                    style={{ height: "130px", width: "130px" }} />
                                <div className="card-body "><h5 className="card-title text-center">Easy to Order</h5><p className="card-text text-center">Food Includes Halal &amp; freshly produced Meat and processed meat aswell</p></div>
                            </div>
                            <div className="card">
                                <img src={card2} alt="card2" className="card-image-top mx-auto" alt=""
                                    style={{ height: "130px", width: "130px" }} />
                                <div class="card-body "><h5 class="card-title text-center">Live Order</h5><p class="card-text text-center">Place Your Order Online and get it instantly from our super trained drivers</p></div>
                            </div>
                            <div className="card">
                                <img src={card3} alt="card3" className="card-image-top mx-auto" alt=""
                                    style={{ height: "130px", width: "130px" }} />
                                <div class="card-body "><h5 class="card-title text-center">100% Organic</h5><p class="card-text text-center">Organic Food Grown without the usage of synthetic chemicals</p></div>
                            </div>
                            <div className="card">
                                <img src={card4} alt="card4" className="card-image-top mx-auto card-four" alt="..."
                                    style={{ height: "100px", width: "150px" }} />
                                <div class="card-body "><h5 class="card-title text-center">100% Organic</h5><p class="card-text text-center">Organic Food Grown without the usage of synthetic chemicals</p></div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div id='about'>
                <About />
            </div>
            <div id='ourtoppicks'>
                <Toppicks />
            </div>

            <div id='findus'>
                <Findus />
            </div>
        </>
    )
}

export default Home
