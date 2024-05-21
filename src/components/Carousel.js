import React from 'react';
import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic3 from '../pictures/pic3.jpg';
import pic4 from '../pictures/pic4.jpg';

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100" alt="pic1" style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: '50% 10%' }} />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="pic2" style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: '50% 10%' }} />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="pic3" style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: '50% 10%' }} />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100" alt="pic4" style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: '50% 10%' }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
    </>
  );
}
