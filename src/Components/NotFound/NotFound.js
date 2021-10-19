import React from 'react';
import notfound from '../../images/404.svg';

const NotFound = () => {
    return (
        <div className=" notFound-container pt-20 mx-auto w-5/6">
            <img className="" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;