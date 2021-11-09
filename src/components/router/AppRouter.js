import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { setCheckingFinish, startChecking } from '../../actions/auth';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { BlogCreator } from '../blog-creator/BlogCreator';
import { LoadingScreen } from '../ui/loading/LoadingScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        const token = localStorage.getItem('token') || null;
        if ( token ) {
            dispatch( startChecking() );
        }else {
            dispatch( setCheckingFinish() )
        }

    }, [ dispatch, uid ])

    if ( checking ) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <Router>
            <main>
                <Switch>
                    <PublicRoutes 
                        exact 
                        path="/auth/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoutes 
                        exact 
                        path="/" 
                        component={ BlogCreator } 
                        isAuthenticated={ !!uid  }
                    />
                    <PublicRoutes 
                        exact 
                        path="/auth/register" 
                        component={ RegisterScreen } 
                        isAuthenticated={ !!uid  }
                    />
                    <Redirect to="/" />
                </Switch>

            </main>
        </Router>
    )
}
