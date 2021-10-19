import { findByDisplayValue } from '@testing-library/dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {

    const { signInWithGoogle, signInWithGitHub, signUpWithInput, error, setUserName, setError } = useAuth();

    // states here 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    // getting the user input email
    const handleEmail = event => {
        const inputEmail = event.target.value;
        setEmail(inputEmail)
    }

    // getting the user input password
    const handlePassword = event => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
    }

    // getting the user name 
    const handleName = event => {
        const inputName = event.target.value;
        setName(inputName)
    }

    // form submit here 
    const handleSubmit = () => {

        if (password < 6) {
            setError('Password length should be 6 letters !');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        signUpWithInput(email, password);
        setUserName(name);
    }

    return (
        <div className="container lg:w-3/5 p-4 mx-auto pt-24">
            <div className="parent-div">
                <h2 className="text-2xl title font-semibold">Please Signup Here !</h2>

                {/* sign in with from here  */}
                <div className="py-4 flex flex-col justify-center items-center">
                    <input onBlur={handleName} className="border p-2 lg:w-3/5 my-2" type="text" placeholder="Enter your Name" required />
                    <input onBlur={handleEmail} className="border p-2 lg:w-3/5 my-2" type="email" placeholder="Enter your email" required />
                    <input onBlur={handlePassword} className="border p-2 lg:w-3/5 my-2" type="password" placeholder="Enter your password" required />
                    <input className="border p-2 lg:w-3/5 my-2" type="password" placeholder="Confirm password" required />

                    {/* submit button */}
                    <button onClick={handleSubmit} className="bg-gray text-light lg:w-3/5 py-2 px-6 font-semibold" type="button">Submit</button>
                </div>

                {/* shoe error  */}
                <p className="text-danger">{error}</p>

                <hr />

                {/* signin with buttons here  */}
                <div className="container w-11/12 mx-auto py-0">
                    <p className="text-semibold text-gray">or signin with</p>
                    <div className="py-4">
                        <button onClick={signInWithGoogle} className="bg-blue py-2 px-6 font-semibold rounded-md hover:bg-blue-500">Google</button>

                        <button onClick={signInWithGitHub} className="bg-blue py-2 px-6 font-semibold rounded-md hover:bg-blue-500 mx-2">GitHub</button>
                    </div>
                </div>
                <p className="pt-1">Already registered ? <span className="underline text-primary"><Link to="/login">Login</Link></span></p>
            </div>
        </div >
    );
};


export default Signup;