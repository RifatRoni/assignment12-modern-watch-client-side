import React from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import orderImg from '../../images/order/order.gif';
import './OrderNow.css'

const OrderNow = () => {
    const confirmOrder= () => {
        alert('Are you sure to place order?');
    }
    return (
        <div className="booking-service-div">
            <div className="container">   
                <div className="pt-5"> 

                <Container className="mt-5">    
                    <Row>
                        
                        <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="booking-info-div">
                        <Form className="w-75 mx-auto">
                        <h3 className="pb-4">Give Valid Info and Proceed Order</h3>
                            <FloatingLabel controlId="floatingTextarea" label="Your Name" className="mb-3">
                                <Form.Control type="text" placeholder="Your Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Customer Email" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea" label="Receiving Address" className="mb-3">
                                <Form.Control type="text" placeholder="Enter Address" />
                            </FloatingLabel>
                     
                            <FloatingLabel controlId="floatingTextarea2" label="Write your message (optional).">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button onClick={confirmOrder} className="me-3 my-3 btn btn-dark">Confirm Order</Button>
                        </Form> 
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                            <img src={orderImg} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>


            </div>
            
        </div>
    );
};

export default OrderNow;