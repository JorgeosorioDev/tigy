import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import LoadMore from '../LoadMore/LoadMore';
import './TimeLine.css';

class TimeLine extends Component {
    render() {
        return (
            <div className="time-line">
                
                <Posts/>
                <LoadMore />

            </div>
        );
    }
}

export default TimeLine;