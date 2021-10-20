import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container h-screen">
            <div className="container w-11/12 mx-auto pt-32 text-left">
                <h2 className="capitalize text-5xl font-bold text-secondary pt-12">the world best <br /> medical services !</h2>
                <p className="lg:w-3/6 py-4">Hey There Welcome ! It's a pleasure to see you in our webpage. We are <span className="text-primary font-semibold">SENSILE MEDICAL</span> Hospital. We served the best medical treatment , and we try to give the level best from us !</p>
                <Link to="/about"><button className="bg-primary text-light py-2 px-6 font-semibold rounded-md hover:bg-blue-500">ReadMore</button></Link>
            </div>
        </div >
    );
};

export default Banner;



