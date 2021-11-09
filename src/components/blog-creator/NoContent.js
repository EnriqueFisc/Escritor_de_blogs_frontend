import React from 'react';
import { useSelector } from 'react-redux';

export const NoContent = () => {

    const { asideHidden } = useSelector( state => state.ui );

    return (
        <div className={`blogCreator__blog-no-content-container ${ !asideHidden && 'asideIsHidden' }`}>
            <i className="fas fa-pencil-alt fa-7x"></i>
            <span className="blogCreator__blog-no-content-title">Selecciona o crea un post!</span>
        </div>
    )
}
