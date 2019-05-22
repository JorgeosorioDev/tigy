import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <div className="user-img">
                    
                </div>
                <div className="user-name">
                    <h3>Cristina Segovia</h3>
                </div>
                <div className="user-level">
                    <p>Nivel Azul</p>
                </div>
            </div>
        );
    }
}

export default UserInfo;