import React from 'react';
import './NotFound.css'
import notFound from '../../images/notfound/notfound.jpg'

const NotFound = () => {
    return (
        <div className="mx-auto container notfound-img">
            <img src={notFound} className="img-fluid" alt="" />
        </div>
    );
};

export default NotFound;