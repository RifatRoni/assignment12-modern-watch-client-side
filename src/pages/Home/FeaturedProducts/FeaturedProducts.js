import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Product from '../../Products/Product/Product';
import './FeaturedProducts.css'

const FeaturedProducts = () => {
    const [products, setSpecialProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-plateau-50605.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>setSpecialProducts(data.slice(0,6)))
    }, []);
    const history = useHistory();
    const handleViewMoreProducts = () => {
        history.push('/products');
    }
    return (
        <div className="special-service-div pb-5">
            <div className="container">
                <h1 className="text-center py-5">Our Featured Products</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                    products.map(product => <Product key={product.key} product={product}></Product>)
                    }             
                </Row>
                <div className="mt-5 d-flex justify-content-center">
                    <Button onClick={handleViewMoreProducts}  variant="dark">More Products</Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;