import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/logo/logo.png'

import './Footer.css'

const Footer = () => {
    return (
            <div className="footer bg-dark text-white pt-4">
                <div className="container">
                    <Row className="pt-3">
                        <Col md={12} lg={5} className="pt-2">
                            <img
                            alt=""
                            src={logo}
                            width="50"
                            height="35"
                            className="d-inline-block align-top me-3 mt-3 img-fluid"
                            />
                            <span className="footer-brand-name-span"><h4>Modern Watch Shop</h4></span>
                            <br />
                            
                            <p className="pt-3"> We are the best watch collector. Keep in touch with us.</p>

                        </Col>

                        <Col lg={3} className="pb-3">
                            <h4>Opening Hours</h4>
                            <p>Sunday to Thursday</p>
                            <p>Time: 09:00 AM to 4:00PM</p>

                        </Col>
                        <Col lg={4} className="pb-2">
                            <h4>Contact Us</h4>
                            <p><span><i className="fas fa-phone-alt"></i> Contact: 01946872823</span></p>
                            <p><span> <i className="fas fa-envelope"></i> Email: modernwatch@gmail.com</span></p>
                            <p>
                                <span> <i className="fas fa-map-marker-alt"></i>  Plot-2, Road-1, Block-A, Mirpur-11, Dhaka-1216</span>
                            </p>
                        </Col>
                    </Row>
                </div>
                
                <hr />
                <p  className="text-center py-4"> &copy; 2021 All right reserved | Modern Watch Shop</p>
            </div>
       
    );
};

export default Footer;