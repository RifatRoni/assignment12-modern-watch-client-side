import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import WhyWeSpecial from '../WhyWeSpecial/WhyWeSpecial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Review></Review>
            <WhyWeSpecial></WhyWeSpecial>
        </div>
    );
};

export default Home;