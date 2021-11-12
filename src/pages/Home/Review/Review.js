import React from 'react';
import './Review.css';
import carousel3Img from '../../../images/review/carousel3.jpg';
import carousel2Img from '../../../images/review/carousel2.jpg';
import carousel1Img from '../../../images/review/carousel1.jpg';
import reviewImg from '../../../images/review/review.jpg';
import { Carousel } from 'react-bootstrap';

const Review = () => {
    return (
        <div className="review" style={{backgroundColor:"#e2e2e2"}}>
            <h1 className="text-center py-5 text-black">Reviews</h1>

            <div className="row pb-5">
                <div className="col">
                <Carousel className="carousel-div">
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src={carousel3Img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-white">John Doe, Cricketer, USA</h3>
                    <p className="text-white">I have bought a smart watch from this shop. Definitely this is a nice importer of the great quality watch products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel2Img}
                    alt="Second slide"
                   />

                    <Carousel.Caption>
                    <h3 className="text-white">Zara, Lawyer,  USA</h3>
                    <p className="text-white">I highly recommend this Modern Watch Shop. They are good seller and their shop and after sales servicing is great.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel1Img}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-white">Kalr Willington</h3>
                    <p className="text-white">This is good source of watch collection. You can buy from here. Definitely this is good for the best quality product collection.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                </div>

                <div className="col">
                    
                    <img src={reviewImg} className="img-fluid pb-5" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Review;