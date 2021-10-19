import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';
import './Services.css';

const Services = () => {

    const [services] = useServices();

    return (
        <div className="services-container">
            <div className="container w-11/12 py-10 mx-auto text-left">
                <h2 className="text-5xl font-bold text-light service-title inline"> Services </h2>
                <div className="grid grid-cols-3 pt-6">
                    {
                        services.map(service => <Service
                            key={service.id}
                            services={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;