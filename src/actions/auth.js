import Swal from "sweetalert2";
import { fetchToken } from "../helpers/fetchToken";

import { fetchTokenLess } from "../helpers/fetchTokenLess";
import { types } from "../types/types";
import { logoutCleanPostsUser } from "./post";



export const authStartLogin = ( email, password ) => {
    return async( dispatch ) => {

        try {
            const resp = await fetchTokenLess( 'auth', { email, password }, 'POST' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }));
                localStorage.setItem( 'token', body.token );
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El correo o la contraseña son incorrectos',
                })
            }

        } catch ( err ) {
            console.log( err );
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrio un error con el servicio, intentelo más tarde',
            })
        }

    }
}

export const startAuthRegister = ( user ) => {
    return async( dispatch ) => {
        try {
            
            const resp = await fetchTokenLess( 'auth/create', { ...user }, 'POST' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }));                
                localStorage.setItem( 'token', body.token );
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: body.msg,
                })
                console.log( body );

            }

        } catch ( err ) {
            console.log( err );
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.msg,
            })
        }
    }
}

export const startChecking = () => {
    return async( dispatch ) => {
        try {
            
            const resp = await fetchToken( 'auth/renew' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }));
                localStorage.setItem( 'token', body.token );
            }else {
                dispatch( setCheckingFinish() );
            }
        } catch ( err ) {
            console.log( err );
            dispatch( setCheckingFinish() );

        }
    }
}

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
        dispatch( logoutCleanPostsUser() );

    }
}

export const setCheckingFinish = () => ({
    type: types.authCheckingFinish,
});

const login = ( user ) => ({
    type: types.authLogin,
    payload: user,
});

const logout = () => ({
    type: types.authLogout,
})
