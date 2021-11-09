import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteFab } from './buttons/DeleteFab';
import { Savebutton } from './buttons/Savebutton';
import { FileUploadbutton } from './buttons/FileUploadbutton';
import { UpdateButton } from './buttons/UpdateButton';
import { postSetActive } from '../../actions/post';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { setDisableUpdateButton, setUnDisableUpdateButton } from '../../actions/ui';
import { ShowImgButton } from './buttons/ShowImgButton';
import { PreviewButton } from './buttons/PreviewButton';




export const BlogEditor = () => {

    const dispatch = useDispatch();
    const { asideHidden } = useSelector( state => state.ui );
    const { activePost } = useSelector( state => state.post );
    const { post } = activePost; 
    const [ postDataValues, setPostDataValues ] = useState( post );
    const { title, body, imageUrl} = postDataValues;

    const refPostId = useRef( post.id );
    const refPostIsNew = useRef( activePost.isNew );

    useEffect(() => {
        if ( post.id !== refPostId.current ) {
            setPostDataValues( post );
            refPostId.current = post.id;
            dispatch( setDisableUpdateButton() );
        }
    }, [ post, refPostId, setPostDataValues, dispatch ]);
    
    useEffect(() => {
        if ( activePost.isNew === refPostIsNew.current ) {
            dispatch( postSetActive(
                activePost.isNew,
                { ...postDataValues }
            ));
        }
        refPostIsNew.current = activePost.isNew;
        
    }, [ dispatch, postDataValues, activePost.isNew]);
    

    const handleOnChangePostData = ( { target } ) => {

        setPostDataValues({
            ...postDataValues,
            [target.name]: target.value
        })
        dispatch( setUnDisableUpdateButton() );
            
    }

    const handleChangeCK =  ( e, editor ) => {

        if ( JSON.stringify( post.body ) !== JSON.stringify( editor.getData() ) ) {
            setPostDataValues({
                ...postDataValues,
                body: editor.getData()
            })
            dispatch( setUnDisableUpdateButton() );
            
        }
    };

    return (
        <div className={`blogEditor__blog-container ${ !asideHidden && 'asideHide'}`}>
            <div className="blogEditor__blog-navEditor">
                <div className="blogCreator-blog-nav-buttons">
                    <FileUploadbutton />
                    {
                        activePost.isNew ? <Savebutton />
                        : <UpdateButton />
                    }
                    
                </div>
            </div>
            <div className="blogEditor__blog-fab">
                <div className="blogEditor__blog-img">
                    { !!imageUrl && <ShowImgButton /> }
                </div>
                <div className="blogEditor__blog-preview">
                { !activePost.isNew && <PreviewButton /> }
                </div>
            </div>
            <div className="blogEditor__blog-editor">
                <div className="blogEditor__blog-editor-container">
                    <div className="blogEditor__blog-editor-title">
                        <input 
                            type="text"
                            placeholder="Some awesome title!"
                            value={ title }
                            name="title"
                            onChange={ handleOnChangePostData }
                        />
                    </div>
                    <div className="blogEditor__blog-editor-body" >
                        <CKEditor 
                            editor={ ClassicEditor }
                            className="editor"
                            data={ body }
                            onChange={ handleChangeCK }
                        />
                    </div>
                    { !activePost.isNew && <DeleteFab /> }
                </div>
            </div>
        </div>
    )
}
