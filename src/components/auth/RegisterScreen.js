import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startAuthRegister } from '../../actions/auth';
import { formRegisterValidator } from '../../helpers/formRegisterValidator';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const [ formValues, setFormValues ] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { name, lastName, email, password, confirmPassword } = formValues;
    const [viewPass, setViewPass] = useState( false );
    const [viewConfirmPass, setViewConfirmPass] = useState( false );

    const handleOnChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value,
        });
    }

    const handleOnSubmitRegister = async( e ) => {
        e.preventDefault();

        const validation = await formRegisterValidator( formValues );

        if ( !validation.ok ) {
            return Swal.fire( 'Error', validation.msg, 'error' );
        }

        dispatch( startAuthRegister({ username: name, 'last_name':lastName, email, password, }) );
    }

    const handleTurnViewPass = () => {
        setViewPass( !viewPass );
    }
    const handleTurnViewConfirmPass = () => {
        setViewConfirmPass( !viewConfirmPass );
    }

    return (
        <div className="auth__auth-container">
            <div className="auth__auth-content">
                <div className="auth__auth-header">
                    <h2>Registrarse</h2>
                </div>
                <div className="auth__auth-body">
                    <form 
                        className="form__form-group"
                        onSubmit={ handleOnSubmitRegister }
                    >
                        <label className="form__form-label">Nombre:</label>
                        <div className="form__form-group-icon">
                            <input 
                                className="form__form-control"
                                type="text"
                                autoComplete="false"  
                                name="name"
                                placeholder=""
                                value={ name }
                                onChange={ handleOnChange }
                            />
                            <i className="fas fa-user form-icon"></i>
                        </div>

                        <label className="form__form-label">Apellido:</label>
                        <div className="form__form-group-icon">
                            <input 
                                className="form__form-control"
                                type="text"
                                autoComplete="false"  
                                name="lastName"
                                placeholder=""
                                value={ lastName }
                                onChange={ handleOnChange }
                            />
                            <i className="fas fa-user form-icon"></i>
                        </div>

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

                        <label className="form__form-label">Confirmar contraseña:</label>
                        <div className="form__form-group-icon">
                            <input 
                                className="form__form-control"
                                autoComplete="false"  
                                type={`${ viewConfirmPass ? 'text' : 'password'}`}
                                name="confirmPassword"
                                placeholder=""
                                value={ confirmPassword }
                                onChange={ handleOnChange }
                            />
                            <i className="fas fa-lock form-icon"></i>
                            {
                                ( viewConfirmPass ) 
                                ? ( <i onClick={ handleTurnViewConfirmPass } className="fas fa-eye-slash form-icon-eye"></i> )
                                : ( <i onClick={ handleTurnViewConfirmPass } className="fas fa-eye form-icon-eye"></i> )
                            }
                        </div>
                        <Link to="/auth/login" className="form__form-link">¿Ya tienes una cuenta? Inicia sesión</Link>
                        <button className="btn btn-primary btn-block">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
