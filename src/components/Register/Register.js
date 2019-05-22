import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div className="register">

                <div className="register-box">
                    <img src={logo} alt="Logo" />
                    <h1>Registro</h1>
                    <div className="register-form">
                        <form action="">
                            <input type="email" placeholder="Email"/>
                            <select name="" id="">
                                <option value="">País</option>
                            </select>
                            <input type="password" placeholder="Contraseña"/>
                            <input type="password" placeholder="Confirma contraseña"/>
                            <input type="checkbox" className="register-check" id="register-check"/>
                            <label className="register-check" htmlFor="register-check">
                                <i className="far fa-square"></i>
                                <i className="far fa-check-square"></i>
                                Acepto los términos y condiciones
                            </label>
                            <button>Registrarme</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Register;