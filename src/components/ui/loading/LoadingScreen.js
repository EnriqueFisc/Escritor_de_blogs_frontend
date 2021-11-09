import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

export const LoadingScreen = () => {
    return (
        <div className="loading__load-container">
            <RingLoader size={ 60 } color="#2D95EB"/>
        </div>
    )
}
