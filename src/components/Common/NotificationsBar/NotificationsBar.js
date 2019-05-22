import React, { Component } from 'react';
import './NotificationsBar.css';

class NotificationsBar extends Component {
    render() {
        return (
            <div className="body-component notifications">

                <div className="notifications-bar">
                    <div className="notifications-header">
                        <h4>Notificaciones</h4>
                        <div id="close-notifications">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>

                    <div className="swicht-buttons">
                        <button className="my-nots">Tus notificaciones</button>
                        <button className="nov-tigy">Novedades Tigy</button>
                    </div>

                    <div className="today-notifications">
                        <div className="notifications-title">
                            <h5>Hoy</h5>
                        </div>
                        <div className="notification-message">
                            <div className="notification-user-info">
                                <div className="notification-user">
                                    <div className="user-post-img">
                                    
                                    </div>
                                    <div className="user-post-info">
                                        <div className="user-name">
                                            <p>Name</p>
                                        </div>
                                        <div className="notification-user-relation">
                                            <small>Compañeros</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="notification-time">
                                    <small>ahora</small>
                                </div>
                            </div>
                            <div className="notification-description">
                                <p>Comentó tu solicitud</p>
                            </div>
                        </div>
                    </div>

                    <div className="previous-notifications">
                        <div className="notifications-title">
                            <h5>Esta semana</h5>
                        </div>
                        <div className="notification-message">
                            <div className="notification-user-info">
                                <div className="notification-user">
                                    <div className="user-post-img">
                                    
                                    </div>
                                    <div className="user-post-info">
                                        <div className="user-name">
                                            <p>Name</p>
                                        </div>
                                        <div className="notification-user-relation">
                                            <small>familia</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="notification-time">
                                    <small>hace 1 día</small>
                                </div>
                            </div>
                            <div className="notification-description">
                                <p>Quiere brindarte ayuda</p>
                            </div>
                        </div>
                    </div>

                    <div className="weekly-notifications">

                    </div>
                </div>

            </div>
        );
    }
}

export default NotificationsBar;