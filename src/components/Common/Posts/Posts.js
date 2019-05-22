import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
    render() {
        return (
            <div className="user-posts">
                <div className="post-header">
                    <div className="user-post-header">
                        <div className="user-post-img">

                        </div>
                        <div className="user-post-info">
                            <div className="user-name">
                                <p>Fernando Zambrano</p>
                            </div>
                            <div className="post-timer">
                                <small>hace 16m</small>
                            </div>
                        </div>
                    </div>
                    <div className="recognition-counter">
                        <p>10<i className="fas fa-award"></i></p>
                    </div>
                </div>
                <div className="post-content">

                </div>
                <div className="post-coment-counter">
                    <p>3 comentarios</p>
                </div>
                <div className="post-footer">
                    <div className="user-like">
                        <p><i className="far fa-heart"></i>Me gusta</p>
                    </div>
                    <div className="user-help">
                        <p><i className="far fa-handshake"></i>Brindar ayuda</p>
                    </div>
                    <div className="user-share">
                        <p><i className="fas fa-share"></i>Compartir</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;