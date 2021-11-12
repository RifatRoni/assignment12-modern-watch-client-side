import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImg from '../../../images/login/login.gif'

const Register = () => {
    const { user, setEmail, setPassword, signUpWithEmail_Password, error, setError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleStateChangeOnInput = (e, setState) => {
        setState(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signUpWithEmail_Password()
            .then((res) => {
                console.log(res.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    useEffect(() => {
        user.accessToken && history.push(redirect_uri);
    }, [user, history, redirect_uri]);
    
    return (

        <div className="container">
            <Row className="pt-3">
                <Col md={12} lg={4} className="pb-3">
                <div className="">
                <img className="img-fluid" src={loginImg} alt="" />
                </div>
                </Col>
                <Col md={12} lg={8} className="pb-3 mt-2">
                    <div className="border px-5 pb-4">
                    <h2 className="my-4">Please Register And Continue ...</h2>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                        <form onSubmit={handleFormSubmit}>
                            <input  className="form-control" type="email" placeholder="Enter your email" onBlur={(e) => handleStateChangeOnInput(e, setEmail)} required aria-label="default input example"/>
                            <br />
                            <input  className="form-control" type="password" placeholder="Enter your password" onBlur={(e) => handleStateChangeOnInput(e, setPassword)} required aria-label="default input example"/>
                            <br />
                            <input className="btn btn-dark px-3 mb-2" type="submit" value="Register" />
                        </form>
                        <small>
                            Already have an account? <Link to="/login">Login Here</Link>
                        </small>
                       
                    </div>
                </Col>
            </Row>
        </div>

    );
};


export default Register;