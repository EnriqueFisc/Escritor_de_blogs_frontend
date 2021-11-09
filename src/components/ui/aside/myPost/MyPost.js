import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import moment from 'moment';
import 'moment/locale/es-mx';
import { postSetActive, startUpdatePost } from '../../../../actions/post';


moment.locale( 'es-mx' );

export const MyPost = ({ id, title, date, body, imageUrl, user_id }) => {

    const dispatch = useDispatch();
    const { disableUpdate } = useSelector(state => state.ui);
    const { activePost } = useSelector(state => state.post);

    const handleActivePost = async() => {

        if ( !disableUpdate ) {
            if ( id !== activePost.post.id ) {
                const result = await Swal.fire({
                    icon: 'warning',
                    title: '¿Seguro que quieres cambiar de documento?',
                    text: 'Sí cambias de documento sin guardar se perderán los cambios',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: `Guardar`,
                    denyButtonText: `No guardar`,
                    cancelButtonText: `cancelar`,
                });
                
                console.log( result );
                
                if (result.isConfirmed) {
                    dispatch( startUpdatePost( activePost.post ) );
                } else if (result.isDenied) {
                    // Swal.fire('Changes are not saved', '', 'info')
                    dispatch( postSetActive(
                        false,
                        { id, title, date, body, imageUrl, user_id }
                    ));
                }
            }
        }else {
            dispatch( postSetActive(
                false,
                { id, title, date, body, imageUrl, user_id }
            ));
        }

    }

    return (
        <div 
            className="aside__post-container"
            onClick={ handleActivePost }
        >
            <div className="aside__post-title">
                <span>{ title }</span>
            </div>
            <div className="aside__post-date">
                <span>{ moment( Number(date) ).format( 'llll' ) }</span>
            </div>
        </div>
    )
}
