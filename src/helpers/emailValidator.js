
export const emailValidator = ( email ) => {
    return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
}
