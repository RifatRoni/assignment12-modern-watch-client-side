import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/wbanner1.jpg';
import banner2 from '../../../images/banner/wbanner2.jpg';
import banner3 from '../../../images/banner/wbanner3.jpg';

const Banner = () => {
    return (
        <div >
           <Carousel className="carousel-div">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-black">High Technology</h3>
                    <p className="text-black">We use updated technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                   />

                    <Carousel.Caption>
                    <h3 className="text-black">Special Care</h3>
                    <p className="text-black">We provide special care for all people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-black">Love and Respect</h3>
                    <p className="text-black">We have love and respect for all</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;