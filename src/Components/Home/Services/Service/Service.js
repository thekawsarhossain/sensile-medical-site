import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ services }) => {
    const { img, name, description, id } = services;

    // using histroy to make dynamic route
    const histroy = useHistory();
    const handleDetails = (serviceId) => {
        const url = `service/${serviceId}`;
        histroy.push(url);
    }

    return (
        <div className="service-card pb-2">
            <img className="w-full h-3/5" src={img} alt="" />
            <div className="p-2">
                <h2 className="text-secondary text-2xl font-medium">{name}</h2>
                <p className="my-2">{description.slice(0, 90)}...</p>
                <button onClick={() => handleDetails(id)} className="bg-primary py-2 px-6 font-semibold rounded-md hover:bg-blue text-light">Details</button>
            </div>
        </div>
    );
};

export default Service;