import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogout } from '../../../../actions/auth';
import { startUpdatePost } from '../../../../actions/post';



export const LogoutButton = () => {

    const dispatch = useDispatch();
    const { disableUpdate } = useSelector(state => state.ui);
    const { activePost } = useSelector(state => state.post);

    const handleLogout = async() => {

        if ( !disableUpdate ) {
            const result = await Swal.fire({
                icon: 'warning',
                title: '¿Seguro que quieres salir?',
                text: 'Sí sales sin guardar se perderán los cambios',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Guardar`,
                denyButtonText: `No guardar`,
                cancelButtonText: `cancelar`,
            });

            if (result.isConfirmed) {
                dispatch( startUpdatePost( activePost.post ) );
            } else if (result.isDenied) {
                dispatch( startLogout() );
            }
        }else {
            dispatch( startLogout() );
        }
    }

    return (
        <button onClick={ handleLogout } className="btn btn-danger" >
            <span>Salir <i className="fas fa-sign-out-alt"></i></span>
        </button>
    )
}
