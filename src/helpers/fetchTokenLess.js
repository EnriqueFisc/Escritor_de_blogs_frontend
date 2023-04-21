

export const fetchTokenLess = async( endpoint, data, method = 'GET' ) => {
    
    const url = `http://localhost:5000/api/${ endpoint }`

    if ( method === 'GET' ) {
        return  fetch( url );
    }else {
        return  fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }

}

