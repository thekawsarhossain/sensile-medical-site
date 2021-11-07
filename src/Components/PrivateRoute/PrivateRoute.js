import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import loading from '../../images/loding.gif';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    // spinner here 
    if (isLoading) {
        return <div className="h-screen flex items-center justify-items-center mx-auto">
            <img src={loading} alt="" />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        >

        </Route>
    );
};

export default PrivateRoute;