import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { postSetActive, startUpdatePost } from '../../../../actions/post';

const initState = {
    title: '',
    body: '',
}

export const CreatePostButton = () => {

    const dispatch = useDispatch();
    const { activePost } = useSelector(state => state.post);
    const { disableUpdate } = useSelector(state => state.ui);

    const handleOnCreatePostButton = async() => {
        
        if ( !disableUpdate ) {
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
                dispatch( postSetActive( true, initState ));
            } else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info')
                dispatch( postSetActive( true, initState ));
            }
        }else {
            dispatch( postSetActive( true, initState ));
            
        }
       
    }
    
    return (
        <div 
            className="aside__aside-add-post"
            onClick={ handleOnCreatePostButton }
        >
            <i className="fas fa-plus-circle fa-7x"></i>
            <span>Crear publicación</span>
        </div>
    )
}
