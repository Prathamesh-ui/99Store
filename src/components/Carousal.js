import React from 'react'
import Stylesheet from 'react';
import '../styles/carousal.css';

function Carousal() {
  return (


    <div className="container-fluid my-3" height="80%" width="50%"><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/1600x500/?gifts" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Gifts</h5>
            <p>Kids Toy | Birthday Gifts | Handmade Gifts</p>

          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x500/?store" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>99 Store</h5>
            <p>All products are available</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x500/?teddy" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>teddy</h5>
            <p>Kids Cartoon teddy</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x500/?earphone" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Mobile Accessories</h5>
            <p>Earphone | Headphones | Cable | Charger | Bluetooth</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>

  )
}

export default Carousal

// Stylesheet.create


