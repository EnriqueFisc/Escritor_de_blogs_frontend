import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export const PreviewButton = () => {

    const { activePost } = useSelector(state => state.post);

    const handleOnPreview = () => {
        Swal.fire({
            imageUrl: activePost.post.imageUrl,
            // imageHeight: 1500,
            width: 800,
            showConfirmButton: false,
            html: ` <div class="modal-html"> <h1>${ activePost.post.title }</h1> ${ activePost.post.body } </div> ` ,
            imageAlt: 'A tall image',
        });
    }

    return (
        <button
            className="btn btn-primary btn-circle"
            onClick={ handleOnPreview }
        >
            <i className="fas fa-eye fa-2x" ></i>
        </button>
    )
}
