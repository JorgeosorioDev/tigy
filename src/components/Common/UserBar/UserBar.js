import React, { Component } from 'react';
import './UserBar.css';

class UserBar extends Component {
    render() {
        return (
            <div className="user-bar">
                <div className="user-bar-content">
                    <div className="legend">
                        <p><span>Solicita ayuda</span> o <span>envía un reconocimiento</span> a tus amigos</p>
                    </div>
                    <div className="ask-for-help">
                        <i className="far fa-handshake"></i>
                        <p>Solicita ayuda</p>
                    </div>
                    <div className="recognition">
                        <i className="fas fa-award"></i>
                        <p>Reconocimiento</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBar;