import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startUploadImg } from '../../../actions/post';

export const FileUploadbutton = () => {

    const dispatch = useDispatch();
    const { activePost } = useSelector(state => state.post);
    

    const handleOnClickPictureBotton = () => {
        document.querySelector( '#fileSelector' ).click();
    }

    const handleFileSelectorChange = ({ target }) => {
        const file = target.files[0];
        
        if ( activePost.isNew ) {
            let imageUrl = localStorage.getItem('url_img') || null;
            dispatch( startUploadImg( file, imageUrl ) );
            
        }else {
            dispatch( startUploadImg( file ) );
        }

        // setFile( file );
    }

    return (
        <>
            <input 
                id="fileSelector"
                type="file"
                name="image"
                style={{ display: 'none' }}
                onChange={ handleFileSelectorChange }
            />
            <button 
                className="navbar__nav-button"
                onClick={ handleOnClickPictureBotton }
            >
                <i className="fas fa-upload fa-2x"></i>
                <span>Subir imagen</span>
            </button>
        </>
    )
}
