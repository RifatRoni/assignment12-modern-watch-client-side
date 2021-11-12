import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col lg={3} className="bg-dark nav-dashboard">
                
                    <ul className="dashboard-nav pt-4">
                        <li className="dashboard-nav-li mb-4">Dashboard</li>
                        <li className="dashboard-nav-li mb-4">Manage all orders</li>
                        <li className="dashboard-nav-li mb-4">Add a products</li>
                        <li className="dashboard-nav-li mb-4">Make admin</li>
                        <li className="dashboard-nav-li mb-4">Mange products</li>
                    </ul>
                </Col>

            </Row>
        </div>
    );
};

export default Dashboard;