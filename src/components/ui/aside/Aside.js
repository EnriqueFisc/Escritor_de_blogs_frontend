import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGetPosts } from '../../../actions/post';
import { uiHideAsaid } from '../../../actions/ui';
import { CreatePostButton } from './buttons/CreatePostButton';
import { LogoutButton } from './buttons/LogoutButton';
import { Posts } from './myPost/Posts';

export const Aside = () => {

    const { asideHidden } = useSelector( state => state.ui );
    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startGetPosts() );
    }, [ dispatch ]);

    const handleAsideToggleg = () => {
        dispatch( uiHideAsaid() );
    }

    return (
        <aside className={`aside__aside-container ${ asideHidden && 'asideHidden' }`}>
            <div className="aside__aside-toggle-container">
                <div 
                    className={`aside__toggle ${ asideHidden && 'asideHiddenToggle' }`}
                    onClick={ handleAsideToggleg }    
                >
                    {
                        ( asideHidden ) 
                            ? <i className="fas fa-arrow-right"></i>
                            : <i className="fas fa-arrow-left"></i>
                    }
                </div>
            </div>
            <div className="aside__aside-user">
                <span><i className="fas fa-user"></i> { ` ${ name }` }</span>
                <LogoutButton />
            </div>
            <CreatePostButton />
            <div className="aside__aside-myPosts-span">
                <span>Mis publicaciones</span>
            </div>
            <Posts />
        </aside>
    )
}
