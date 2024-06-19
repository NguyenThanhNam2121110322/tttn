
import { Container, Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseURL from '../../api/BaseUrl';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../api/apiService';



function Slider() {
  const [slideShows, setSlideShows] = useState([]);
  const ImgUrl = "http://localhost:8080/upload/"

  useEffect(() => {
    // Gọi API để lấy danh sách category khi component được render
    axios.get(baseURL + `slideshows`)
      .then(response => {
        console.log("slideshow", response.data)
        // Xử lý dữ liệu trả về từ API
        setSlideShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching slideshows:', error);
      });
  }, []);
  return (
//interval = time chạy slide
      <Carousel id="header-carousel" className="carousel slide" interval={6000}>
                {slideShows.map(slideshow => (
        <Carousel.Item className='carousel-item' style={{ height: 410 }}>
          <img
            className="d-block w-100"
            src={IMAGE_URL + 'slideshows/' + slideshow.imageUrl}
            text="First slide"
          />
          <Carousel.Caption>
            <h4 className="text-light text-uppercase font-weight-medium mb-3">
              10% Off Your First Order
            </h4>
            <h3 className="display-4 text-white font-weight-semi-bold mb-4">
              {slideshow.descriptionUrl}
            </h3>
            <a href="#" className="btn btn-light py-2 px-3">
              Shop Now
            </a>
          </Carousel.Caption>
        </Carousel.Item>
            ))}
        {/* <Carousel.Item style={{ height: 410 }}>
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
        </Carousel.Item> */}
      </Carousel>

  );
}

export default Slider;