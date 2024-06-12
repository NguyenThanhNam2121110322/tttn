import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Slider() {
  return (
//interval = time chạy slide
      <Carousel id="header-carousel" className="carousel slide" interval={6000}>
        <Carousel.Item className='carousel-item' style={{ height: 410 }}>
          <img
            className="d-block w-100"
            src={require("../../assets/img/carousel-1.jpg")}
            text="First slide"
          />
          <Carousel.Caption>
            <h4 className="text-light text-uppercase font-weight-medium mb-3">
              10% Off Your First Order
            </h4>
            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
              Fashionable Dress
            </h3>
            <a href="#" className="btn btn-light py-2 px-3">
              Shop Now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 410 }}>
          <img
            className="d-block w-100"
            src={require("../../assets/img/carousel-2.jpg")}
            text="Second slide"
          />
          <Carousel.Caption>
            <h4 className="text-light text-uppercase font-weight-medium mb-3">
              10% Off Your First Order
            </h4>
            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
              Reasonable Price
            </h3>
            <a href="#" className="btn btn-light py-2 px-3">
              Shop Now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  );
}

export default Slider;