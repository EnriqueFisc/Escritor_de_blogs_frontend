import Swal from "sweetalert2";
import { fetchToken } from "../helpers/fetchToken";
import { fileUpload } from "../helpers/imageUpload";
import { types } from "../types/types";
import { setDisableUpdateButton } from "./ui";


export const startGetPosts = () => {
    return async( dispatch ) => {
        try {
            const resp = await fetchToken( 'post' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( loadPost( body.resp ) );
            }else {
                console.log( body );
            }
        } catch ( err ) {
            Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
        }
    }
}

export const startUpdatePost = ( post ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchToken( `post/${ post.id }`, post, 'PUT');
            const body = await resp.json();
            
            if ( body.ok ) {
                dispatch( postUpdate( post ) );
                dispatch( setDisableUpdateButton()  );
                Swal.fire('Guardado!', '', 'success');
            }else {
                console.log( body );
                Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
            }
        } catch ( err ) {
            Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
        }
    }
}

export const startUploadImg = ( file, prevFile = null ) => {
    return async( dispatch, getState ) => {
        const { post } = getState().post.activePost;
        try {
            Swal.fire({
                title: 'Uploading...',
                text: 'Please wait...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            })

            const imgUrl = await fileUpload( file, prevFile );
            post.imageUrl = imgUrl;
            
            if ( !!post.id ) {
                dispatch( startUpdatePost( post ) );
            }else {
                localStorage.setItem('url_img', imgUrl);
            }


            Swal.close();
            Swal.fire('Imagen subida', 'La Imagen se cargo correctamente!', 'success')
        } catch ( err ) {
            console.log( err );
            Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
        }
    }
}

export const startDeletePost = ( postId ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchToken( `post/${ postId }`, {}, 'DELETE');
            const body = await resp.json();
            
            if ( body.ok ) {
                dispatch( postDelete( postId ) );
                Swal.fire('Borrado!', '', 'success');
            }else {
                console.log( body );
                Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
            }
        } catch ( err ) {
            Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
        }
    }
}

export const startSavePost = ( post ) => {
    return async( dispatch ) => {
        const urlImg = localStorage.getItem('url_img') || null;
        try {
            const resp = await fetchToken( `post`, { ...post, imageUrl: urlImg }, 'POST');
            const body = await resp.json();
            
            if ( body.ok ) {
                dispatch( postSave( body.post ) );
                dispatch( setDisableUpdateButton()  );
                dispatch( postSetActive( false, body.post ) );
                localStorage.removeItem( 'url_img' );
                Swal.fire('Guardado!', '', 'success');
            }else {
                console.log( body );
                Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
            }
        } catch ( err ) {
            Swal.fire( 'Error', 'Ocurrio un error con el servidor, intentelo de nuevo más tarde', 'error' );
        }
    }
}

const postUpdate = ( post ) => ({
    type: types.postUpdate,
    payload: post,
});

const postSave = ( post ) => ({
    type: types.postSave,
    payload: post,
});

const postDelete = ( postId ) => ({
    type: types.postDelete,
    payload: postId,
});

export const postSetActive = ( isNew, post ) => ({
    type: types.postSetActive,
    payload: {
        isNew, 
        post
    },
});

const loadPost = ( posts ) => ({
    type: types.postGetPost,
    payload: posts,
});

export const logoutCleanPostsUser = () => ({
    type: types.postLogoutCleanPosts,
});