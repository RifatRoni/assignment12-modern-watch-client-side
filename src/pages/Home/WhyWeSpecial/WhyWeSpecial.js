import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import whyspecialImg from '../../../images/whyspecial/whyspecial.jpg';
import { useHistory } from 'react-router';

const WhyChooseUs = () => {
    const history = useHistory();
    const visitShop= () => {
        history.push('/products');
    }
    return (
        <div style={{backgroundColor: "#020202"}}>
            <div className="container text-white">
                <h1 className="text-center theme-color py-5">Why Modern Shop Special</h1>
                <Row >
                    <Col lg={7}>
                        <div className="me-4">
                        <p>Watch collecting is complex. Our relationship with the hobby, in general, is unlike anything else, given the combination of fashion, design, expression, mechanics, and history involved in each timepiece. And like real-world relationships, our attraction to them doesn't always make logical sense.</p>
                <ul className="mb-5">
                    <li>
                        <p><span className="fw-bold">Good Collection: </span> We collect latest technology products for the custormer.</p>
                    </li>
                    <li>
                        <p><span className="fw-bold">24/7 Service: </span>We are proving 24/7 hours services sothat we can provide maximum services.</p>
                    </li>
                    <li>
                        <p><span className="fw-bold">Standard Service Charge: </span>We don't take over charge from our patients and we like to provide all classes of people.</p>
                    </li>
                    <li>
                        <p> <span className="fw-bold">Experienced Service Provider: </span>We have bring all experienced provider. so we are available to provide the high class services.</p>
                    </li>
                    <li>
                        <p> <span className="fw-bold">Best Online Shop Support: </span>Our community and sales environment are so much friendly and always try to provide you throng online.</p>
                    </li>
                </ul>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <img className="w-100 float-right" src={whyspecialImg} alt="" />
                    </Col>
                </Row>
                <div className="mb-5 d-flex justify-content-center align-items-center">
                    <Button onClick={visitShop} className=" mb-5 bg-light text-dark border-0">Visit Shop</Button>
                </div> 
            </div>
        </div>
    );
};

export default WhyChooseUs;