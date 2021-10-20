import React from 'react';
import appoinment from '../../images/appoinment.jpg';

const Appoinment = () => {
    return (
        <div className="container w-11/12 mx-auto pt-28">
            <div className="parent-div">
                <h2 className="title text-2xl">Appoinment</h2>
                <div className="grid lg:grid-cols-2">
                    <div>
                        <select className="border p-2 w-3/5 my-2" name="select service" onSelect="">
                            <option value="">Select a Service</option>
                            <option value="">Surgery</option>
                            <option value="">Ophthalmology</option>
                            <option value="">Dental Care</option>
                            <option value="">Neurology</option>
                            <option value="">Pregnancy</option>
                            <option value="">Cardioology</option>
                        </select>
                        <select className="border p-2 w-3/5 my-2" name="select service" onSelect="">
                            <option value="">Select doctor</option>
                            <option value="">Robert</option>
                            <option value="">Whats son</option>
                            <option value="">Korim</option>
                            <option value="">kamal</option>
                            <option value="">Rohan</option>
                            <option value="">Islam mia</option>
                        </select>
                        <input className="border p-2 w-3/5 my-2" type="text" placeholder="Enter Name" />
                        <input className="border p-2 w-3/5 my-2" type="number" placeholder="Enter Number" />
                        <button className="bg-gray text-light lg:w-3/5 my-2 py-2 px-6 font-semibold" type="button">Book</button>
                    </div>
                    <img className="w-full p-4 rounded-lg" src={appoinment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Appoinment;