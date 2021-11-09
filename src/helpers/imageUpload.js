import Swal from "sweetalert2";



export const fileUpload = async( file, prevFile ) => {

    const token = localStorage.getItem( 'token' ) || '';
    const formData = new FormData();
    formData.append( 'imageUrl', file );  

    if ( !!prevFile ) {
        formData.append( 'prevImg', prevFile );  
    }

    try {
        const resp = await fetch( `${ process.env.REACT_APP_API_URL }/post/updateImg`, {
            method: 'POST',
            headers: {
                // 'Content-type': 'application/json',
                'x-token': token,
            },
            body:  formData ,
        });
        const body = await resp.json();
    
        if ( body.ok ) {
            return body.imgUrl;
        }else {
            console.log( body );

            return null;
        }
    } catch ( err ) {
        console.log( err );
        Swal.fire( 'Error', 'Hubo un error al subir la imagen', 'error' );
    }
}

