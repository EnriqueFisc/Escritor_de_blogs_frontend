import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { setCheckingFinish, startChecking } from '../../actions/auth';
import { LoadingScreen } from '../ui/loading/LoadingScreen';
import { LoginCheckAuth } from './LoginCheckAuth';
import { RegisterCheckAuth } from './RegisterCheckAuth';
import { BlogEditorCheckAuth } from './BlogEditorCheckAuth';


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
        <BrowserRouter>
            <main>
                <Routes>
                    <Route  
                        path="auth/login" 
                        element={ <LoginCheckAuth uid={ uid }/> }
                    />
                    <Route 
                        path="auth/register" 
                        element={ <RegisterCheckAuth uid={ uid }/>}
                    />
                    <Route 
                        path="blog" 
                        element={ <BlogEditorCheckAuth uid={ uid }/> }
                    />
                    <Route path="*" element={ <Navigate to='/blog'/> } />
                </Routes>

            </main>
        </BrowserRouter>
    )
}
