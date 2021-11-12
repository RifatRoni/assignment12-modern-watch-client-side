import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://vast-plateau-50605.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>setAllServices(data))
    }, []);
    return (
        <div>
        <div className="container mb-5">
            <h1 className="text-center py-5 theme-color">All Products of Modern Watch</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                products.map(product => <Product key={product.key} product={product}></Product>)
                }            
            </Row>
        </div>
    </div>
    );
};

export default Products;