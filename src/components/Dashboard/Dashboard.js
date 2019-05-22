import React, { Component } from 'react';
import UserBar from '../Common/UserBar'
import GroupBar from '../Common/GroupBar'
import TimeLine from '../Common/TimeLine'
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">

                <UserBar />
                <TimeLine />
                <GroupBar />

            </div>
        );
    }
}

export default Dashboard;