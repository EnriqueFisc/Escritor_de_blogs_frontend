import React from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export const ShowImgButton = () => {

    const { activePost } = useSelector(state => state.post)

    const handleOnShowImg = () => {
        Swal.fire({
            imageUrl: activePost.post.imageUrl,
            imageWidth: '90%',
            showConfirmButton: false,
            imageAlt: 'Custom image',
        });
    }

    return (
        <button
            className="btn btn-primary btn-circle"
            onClick={ handleOnShowImg }
        >
            <i className="fas fa-image fa-2x" ></i>
        </button>
    )
}
