import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css'

const Product = (props) => {
    const {name, price, image} = props.product;
    const history = useHistory();
    const orderNow= () => {
        history.push('/order-now');
    }
    return (
        <div>
            <Col>
                <Card className="course-div">
                    <Card.Img variant="top" src={image} className="p-5 img-fluid product-image"/>
                    <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <div className="course-duration-budget">
                    <Card.Text className="theme-color fw-bold text-center">Price:$ {price}
                    </Card.Text>
                    </div>
                    </Card.Body>
                    <Button onClick={orderNow} variant="secondary" size="sm" className="btn-dark">Order Now</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Product;