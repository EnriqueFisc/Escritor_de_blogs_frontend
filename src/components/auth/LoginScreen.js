import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authStartLogin } from '../../actions/auth';

export const LoginScreen = () => {
    
    const dispatch = useDispatch();
    const [ formValues, setFormValues ] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formValues;
    const [viewPass, setViewPass] = useState( false );

    const handleOnChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value,
        });
    }

    const handleTurnViewPass = () => {
        setViewPass( !viewPass );
    }

    const handleOnSubmit = ( e ) => {
        e.preventDefault();

        if ( email.length < 2 || password.length < 7 ) {
            return Swal.fire( 'Error', 'Asegurate de llenar todos los espacios', 'error' );
        }

        dispatch( authStartLogin( email, password ) );
    }

    return (
        <div className="auth__auth-container">
            <div className="auth__auth-content">
                <div className="auth__auth-header">
                    <h2>Iniciar sesión</h2>
                </div>
                <div className="auth__auth-body">
                    <form 
                        className="form__form-group"
                        onSubmit={ handleOnSubmit }
                    >
                        <label className="form__form-label">Correo:</label>
                        <div className="form__form-group-icon">
                            <input 
                                className="form__form-control"
                                type="email"
                                autoComplete="false"  
                                name="email"
                                placeholder=""
                                value={ email }
                                onChange={ handleOnChange }
                            />
                            <i className="fas fa-envelope form-icon"></i>
                        </div>
                        <label className="form__form-label">Contraseña:</label>
                        <div className="form__form-group-icon">
                            <input 
                                className="form__form-control"
                                autoComplete="false"  
                                type={`${ viewPass ? 'text' : 'password'}`}
                                name="password"
                                placeholder=""
                                value={ password }
                                onChange={ handleOnChange }
                            />
                            <i className="fas fa-lock form-icon"></i>
                            {
                                ( viewPass ) 
                                ? ( 
                                    <div className="form-icon-eye">
                                        <i 
                                            onClick={ handleTurnViewPass } 
                                            className="fas fa-eye-slash">
                                        </i>
                                    </div> 
                                )
                                : (
                                    <div className="form-icon-eye">
                                        <i 
                                            onClick={ handleTurnViewPass } 
                                            className="fas fa-eye"
                                        ></i>
                                    </div>
                                )
                            }
                        </div>
                        <Link to="/auth/register" className="form__form-link"><span>¿No tienes una cuenta? Registrate</span></Link>
                        <button className="btn btn-primary btn-block">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
