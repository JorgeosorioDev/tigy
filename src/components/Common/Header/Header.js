import React, { Component } from 'react';
import logo from '../../../images/logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="logo">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
                <div className="notifications">
                    <input type="checkbox" className="notifications-bell" id="notifications-bell" />
                    <label className="notifications-bell" htmlFor="notifications-bell">
                        <i className="fas fa-bell"><p className="notifications-number">3</p></i>
                    </label>
                </div>
            </header>
        );
    }
}

export default Header;