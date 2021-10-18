import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div className="container w-11/12 mx-auto">
            <button onClick={signInWithGoogle} className="bg-blue-600 py-1 px-6 font-semibold rounded-md hover:bg-blue-500">Google</button>
        </div>
    );
};

export default Login;