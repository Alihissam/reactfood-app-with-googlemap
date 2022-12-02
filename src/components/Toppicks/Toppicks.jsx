import React from 'react'
import './toppicks.css'
import top from '../../images/top.png';
import caca from '../../images/caca.png';
import cc from '../../images/cc.png';
import co from '../../images/co.png';
import ce from '../../images/ce.png';
import ca from '../../images/ca.jpg';

const Toppicks = () => {
    return (
        <>
            <div id="ourtoppicks">
                <section className="top__section m-4 " id="ourtoppicks">
                    <div className="top__heading">
                        <h3 class="text-center m-3 pt-3"> Our Most Selling Hot Products</h3>
                        <p class="text-center m-3 pb-4 pt-3"> Get Your Hands on our Most Loved Items</p>
                    </div>
                    <div className="section-2 mt-5 pt-5">
                        <div className="container">
                            <div className="card-group mx-auto" >
                                <div className="card text-center" >
                                    <img src={top} alt="top" className="card-image-top mx-auto" alt=""
                                        style={{ width: "240px" }} />
                                    <div class="card-body"><h5 class="card-title">Pink Smoothie</h5><p class="card-text">Made with Love for our lovely customers, Because we care for you!</p><p class="card-text">500 pkr</p></div>
                                </div>
                                <div className="card text-center">
                                    <img src={caca} alt="caca" className="card-image-top mx-auto" alt=""
                                        style={{ width: "230px" }} />
                                    <div class="card-body"><h5 class="card-title">Fruit Salad</h5><p class="card-text">Made with Love for our lovely customers, Because we care for you!</p><p class="card-text">1200 pkr</p></div>
                                </div>
                                <div className="card text-center">
                                    <img src={cc} alt="cc" className="card-image-top mx-auto" alt=""
                                        style={{ width: "240px" }} />
                                    <div class="card-body"><h5 class="card-title">Fettucino Pasta</h5><p class="card-text">Made with Love for our lovely customers, Because we care for you!</p><p class="card-text">2000 pkr</p></div>
                                </div>

                                <div className="card text-center">
                                    <img src={co} alt="co" className="card-image-top mx-auto" alt=""
                                        style={{ width: "240px" }} />
                                    <div class="card-body"><h5 class="card-title">100% Organic</h5><p class="card-text">Made with Love for our lovely customers, Because we care for you!</p><p class="card-text">1000 pkr</p></div>
                                </div>
                                <div className="card text-center">
                                    <img src={ce} alt="ce" className="card-image-top mx-auto" alt=""
                                        style={{ width: "240px" }} />
                                    <div class="card-body"><h5 class="card-title">Tomato Soup</h5><p class="card-text">Made with Love for our lovely customers, Because we care for you!</p><p class="card-text">1000 pkr</p></div>
                                </div>
                                <div className="card text-center">
                                    <img src={ca} alt="ca" className="card-image-top mx-auto" alt=""
                                        style={{ width: "240px" }} />
                                    <div class="card-body"><h5 class="card-title">Garlic Panini</h5><p class="card-text">Made with Love for our lovely customers, Because we care for you!</p><p class="card-text">1000 pkr</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Toppicks
