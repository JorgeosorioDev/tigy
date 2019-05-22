import React, { Component } from 'react';
import "./ProfileBar.css"

class ProfileBar extends Component {
    render() {
        return (
            <div className="profile-bar">
                
                <div className="profile-user-img">
                    
                </div>

                <div className="profile-info">
                    <div className="profile-user-info">
                        <div className="profile-user-class">
                            <div className="profile-user-name">
                                <h3>Cristina Segovia</h3>
                            </div>
                            <div className="profile-user-level">
                                <li>Nivel Azul</li>
                            </div>
                        </div>
                        <div className="profile-user-prof">
                            <p>Artista gráfica</p>
                        </div>
                    </div>
                    <div className="profile-user-contact">
                        <p className="mail-info">crist.segovia@gmail.com</p>
                        <p className="phone-info">+593 960224059</p>
                    </div>
                </div>

                <div className="profile-user-status">
                    <div className="progres-bar">
                        <div className="progres-fill">

                        </div>
                    </div>
                    <div className="profile-user-progres">
                        <p>85% de cumplimiento</p>
                    </div>
                    <div className="profile-user-numbers">
                        <div className="profile-user-saldo">
                            <h3>100</h3>
                            <p>Saldo Tigy</p>
                        </div>
                        <div className="profile-user-conextions">
                            <h3>35</h3>
                            <p>Conexiones</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProfileBar;