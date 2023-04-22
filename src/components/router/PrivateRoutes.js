import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

export const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            element={ ( props ) => (
                ( isAuthenticated ) ? 
                <Component { ...props } />
                :
                <Navigate to="/auth/login" />
            )}
        />
    )
}

PrivateRoutes.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}