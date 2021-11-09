import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSavePost } from '../../../actions/post';

export const Savebutton = () => {

    const dispatch = useDispatch();
    const { disableUpdate } = useSelector( state => state.ui );
    const { activePost } = useSelector( state => state.post );
    
    const handleOnSavePost = () => {
    
        dispatch( startSavePost( activePost.post ) );

    }


    return (
        <button 
            className="navbar__nav-button"
            disabled={ disableUpdate }
            onClick={ handleOnSavePost }
        >
            <i className="fas fa-save fa-2x"></i>
            <span>Guardar post</span>
        </button>
    )
}
