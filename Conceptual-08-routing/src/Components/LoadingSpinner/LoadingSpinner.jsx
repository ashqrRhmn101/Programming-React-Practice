import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-345px)]'>
            <PacmanLoader color="#096feb"/>
        </div>
    );
};

export default LoadingSpinner;