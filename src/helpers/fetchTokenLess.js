

export const fetchTokenLess = async( endpoint, data, method = 'GET' ) => {
    
    const url = `https://enriquefisc.cyou/api/${ endpoint }`

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

