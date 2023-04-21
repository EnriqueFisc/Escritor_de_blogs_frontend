export const fetchToken = ( endpoint, data, method = 'GET' ) => {

    const url = `http://localhost:5000/api/${ endpoint }`;
    const token = localStorage.getItem( 'token' ) || '';

    if ( method === 'GET' ) {
        return  fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    }else {
        return  fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }

}