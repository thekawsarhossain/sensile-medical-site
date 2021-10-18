import React from 'react';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import Information from './Information/Information';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Information></Information>
        </div>
    );
};

export default Home;