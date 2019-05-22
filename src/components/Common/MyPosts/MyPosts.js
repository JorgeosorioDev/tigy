import React, { Component } from 'react';
import './MyPosts.css';

class MyPosts extends Component {
    render() {
        return (
            <div className="my-posts">
                <div className="post-header">
                    <div className="my-post-header">
                        <div className="my-post-img">

                        </div>
                        <div className="my-post-info">
                            <div className="my-name">
                                <p>Cristina Segovia</p>
                            </div>
                            <div className="my-post-timer">
                                <small>hace 1m</small>
                            </div>
                        </div>
                    </div>
                    <div className="recognition-counter">
                        <p>5<i className="fas fa-award"></i></p>
                    </div>
                </div>
                <div className="my-post-content">

                </div>
                <div className="my-post-coment-counter">
                    <p>3 comentarios</p>
                </div>
            </div>
        );
    }
}

export default MyPosts;