import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

export const PublicRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    // console.log(isAuthenticated);
    return (
        <Route { ...rest }
            element={ ( props ) => (
                ( isAuthenticated ) ?
                (<Navigate to="/" />)
                :
                (<Component { ...props } />)
            )}
        />
    )
}


PublicRoutes.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}