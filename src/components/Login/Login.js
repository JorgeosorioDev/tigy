import React, { Component } from 'react';
import logo from '../../images/logo.png';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">

                <div className="login-box">
                    <img src={logo} alt="Logo" />
                    <h1>Ingresar</h1>
                    <div className="login-form">
                        <form action="">
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Contraseña"/>
                            <p><a href="jsx-a11y/anchor-is-valid">¿Olvidé mi contraseña?</a></p>
                            <button>Inicia sesión</button>
                        </form>
                    </div>
                    <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
                </div>

            </div>
        );
    }
}

export default Login;