import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-2.png';

const Footer = () => {
    return (
        <div className="bg-gray mt-8">
            <div className="container  p-4 mx-auto text-left">
                <div className="grid lg:grid-cols-3">
                    {/* about info footer */}
                    <div className="p-4">
                        <img className="w-2/6" src={logo} alt="" />
                        <p className="text-light font-sm my-2">So, we Already told about us in the top on this page we are <span className="text-primary font-semibold">SENSILE MEDICAL</span> Team so if you want to read more about us just click this button below 1</p>
                        <Link to="/about"><button className="bg-primary py-1 px-6 font-semibold rounded-md hover:bg-blue text-light">readmore</button></Link>
                    </div>
                    {/* contact area */}
                    <div className="p-6 text-light">
                        <h2 className="text-2xl font-semibold pb-4">Contact us</h2>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="lg:w-4/5">Address</td>
                                    <td>Dhaka, Bangladesh</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>+088 0190000000</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>yourmail@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* subscribe area */}
                    <div className="p-6 text-light">
                        <h2 className="text-2xl font-semibold pb-4">Subscribe to get update</h2>
                        <input className="border p-2 lg:w-full my-2" type="email" placeholder="Enter your Email" required />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;