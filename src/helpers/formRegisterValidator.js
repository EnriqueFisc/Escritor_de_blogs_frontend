import { emailValidator } from "./emailValidator";


export const formRegisterValidator = ( formValues ) => {
    
    if ( formValues.name.length < 2 ) {
        return {
            ok: false,
            msg: 'Asegurate de llenar todos los espacios.',
        }
    }else if ( formValues.lastName.length < 2 ) {
        return {
            ok: false,
            msg: 'Asegurate de llenar todos los espacios.',
        }
    }else if ( formValues.email.length < 2 ) {
        return {
            ok: false,
            msg: 'Asegurate de llenar todos los espacios.',
        }
    }else if ( formValues.password.length < 2 ) {
        return {
            ok: false,
            msg: 'Asegurate de llenar todos los espacios.',
        }
    }else if ( formValues.confirmPassword.length < 2 ) {
        return {
            ok: false,
            msg: 'Asegurate de llenar todos los espacios.',
        }
    }else if ( !emailValidator( formValues.email ) ) {
        return {
            ok: false,
            msg: 'El correo electronico no es valido.',
        }
    }else if ( formValues.password !== formValues.confirmPassword ) {
        return {
            ok: false,
            msg: 'Las constraseñas deben coincidir.',
        }
    }else if ( formValues.password.length < 7 ) {
        return {
            ok: false,
            msg: 'La constraseña debe tener al menos 7 caracteres .',
        }
    }else {
        return {
            ok: true
        }
    }
}
