import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdatePost } from '../../../actions/post';

export const UpdateButton = () => {

    const { activePost } = useSelector(state => state.post);
    const { disableUpdate } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const handleOnUpdate = () => {
        dispatch( startUpdatePost( activePost.post ) );
    }

    return (
        <button 
            className="navbar__nav-button"
            onClick={ handleOnUpdate }
            disabled={ disableUpdate }
        >
            <i className="fas fa-pen-fancy fa-2x"></i>
            <span>Actualizar post</span>
        </button>
    )
}
