import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle, signInWithGitHub, signInWithInput, error, setError, setUser } = useAuth();

    const histroy = useHistory();
    const location = useLocation();
    const redirectUrl = (location.state?.from) || '/home'
    console.log(redirectUrl)

    // states here 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // getting the user input email
    const handleEmail = event => {
        const inputEmail = event.target.value
        setEmail(inputEmail)

    }

    // getting the user input password
    const handlePassword = event => {
        const inputPassword = event.target.value
        setPassword(inputPassword);
    }

    // form submit here 
    const handleSubmit = event => {
        event.preventDefault();
        signInWithInput(email, password)
    }

    // signin with google 
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setError('');
                histroy.push(redirectUrl)
            })
            .catch(error => setError(error.message))
    }

    // sign in with gitghub
    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                setError('');
                histroy.push(redirectUrl)
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="container lg:w-3/5 p-4 mx-auto pt-24">
            <div className="parent-div">
                <h2 className="text-2xl title font-semibold">Please Login Here !</h2>

                {/* sign in with from here  */}
                <form onSubmit={handleSubmit} className="py-4 flex flex-col justify-center items-center">
                    <input onBlur={handleEmail} className="border p-2 lg:w-3/5 my-2" type="email" placeholder="Enter your email" required />
                    <input onBlur={handlePassword} className="border p-2 lg:w-3/5 my-2" type="password" placeholder="Enter your password" required />

                    {/* submit button */}
                    <input className="bg-gray text-light lg:w-3/5 py-2 px-6 font-semibold my-2" type="button" value="Submit" />
                </form>

                {/* shoe error  */}
                <p className="text-danger">{error}</p>

                <hr />

                {/* signin with buttons here  */}
                <div className="container w-11/12 mx-auto py-0">
                    <p className="text-semibold text-gray">or signin with</p>
                    <div className="py-4">
                        <button onClick={handleGoogleSignIn} className="bg-blue py-2 px-6 font-semibold rounded-md hover:bg-blue-500">Google</button>

                        <button onClick={handleGitHubSignIn} className="bg-blue py-2 px-6 font-semibold rounded-md hover:bg-blue-500 mx-2">GitHub</button>
                    </div>
                </div>
                <p className="pt-1">New user ? <span className="underline text-primary"><Link to="/signup">Signup</Link></span></p>
            </div>
        </div>
    );
};

export default Login;