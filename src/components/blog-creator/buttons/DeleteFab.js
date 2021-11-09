import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startDeletePost } from '../../../actions/post';

export const DeleteFab = () => {

    const dispatch = useDispatch();
    const { activePost } = useSelector(state => state.post)


    const handleOnDeletePost = async() => {

        const result = await Swal.fire({
            icon: 'warning',
            title: '¿Seguro que quieres borrar el documento?',
            text: 'Si borras el documento no se podrá recuperar',
            showCancelButton: true,
            confirmButtonText: `Borrar`,
            cancelButtonText: `cancelar`,
        });

        if (result.isConfirmed) {
            dispatch( startDeletePost( activePost.post.id ) );
        }

    }

    return (
        <>
            <button 
                className="btn btn-danger blogCreator-blog-fab-delete"
                onClick={ handleOnDeletePost }
            >
                <span>Eliminar <i className="fas fa-trash"></i></span>
            </button>
        </>
    )
}
