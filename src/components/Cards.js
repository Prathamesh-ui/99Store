import React from 'react'
import CustomBtn from './CustomBtn.js';
import '../styles/Cards.css';
import  accesoriesImg from "../static/img/Accessories.png";
import toysImg from "../static/img/teddy.png";
import framesImg from "../static/img/teddy.png";
import gitftsImg from "../static/img/gift.png";
import stationaryImg from "../static/img/covid_gear.png";
import covidGearImg from "../static/img/covid_gear2.png";







function Cards() {
    return (
        <div>
            <div className="container">
            <div className="row">
                    <div className="col-md-4 col-sm-6 col-xl-4 my-4">
                        <div className="card d-block h-100 box-shadow-hover pointer">
                            <div className="align-items-center d-flex justify-content-center">
                                <img src={accesoriesImg} className="card-img-top" alt="not visible" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Mobile Accessories</h5>
                                <p className="card-text">Buy mobile phone accessories online for smartphones, android phones, dual sim phones, touchscreen phones, and more.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xl-4 my-4">
                        <div className="card d-block h-100 box-shadow-hover pointer">
                            <div className="align-items-center d-flex justify-content-center">
                                <img src={toysImg} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Kids Toys</h5>
                                <p className="card-text">Choose to buy toys online and it will offer you widest range with features, specifications, skill-set and use of toy.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xl-4 my-4">
                        <div className="card d-block h-100 box-shadow-hover pointer">
                            <div className="align-items-center d-flex justify-content-center">
                                <img src= {framesImg} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Custom Frames</h5>
                                <p className="card-text">A custom frame is the best way to display and protect prints, posters and photos that have special meaning to you.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-md-4 col-sm-6 col-xl-4 my-4">
                        <div className="card d-block h-100 box-shadow-hover pointer">
                            <div className="align-items-center d-flex justify-content-center">
                                <img src= {gitftsImg} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body p-4">
                                <h5 className="card-title">Gifts</h5>
                                <p className="card-text">We offer a diverse range of gift items like personalised gifts, flowers & cakes, flowers with chocolates, flower bunches, flowers with teddy, birthday hampers,etc.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xl-4 my-4">
                        <div className="card d-block h-100 box-shadow-hover pointer">
                            <div className="align-items-center d-flex justify-content-center">
                                <img src={stationaryImg} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Stationary</h5>
                                <p className="card-text">Choose to buy toys online and it will offer you widest range with features, specifications, skill-set and use of toy.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                
                    <div className="col-md-4 col-sm-6 col-xl-4 my-4">
                        <div className="card d-block h-100 box-shadow-hover pointer">
                            <div className="align-items-center d-flex justify-content-center">
                                <img src= {covidGearImg} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body p-4">
                                <h5 className="card-title">Covid gear</h5>
                                <p className="card-text">We offer a diverse range of gift items like personalised gifts, flowers & cakes, flowers with chocolates, flower bunches, flowers with teddy, birthday hampers,etc.</p>
                                <CustomBtn />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            
            </div>
        
    )
}

export default Cards