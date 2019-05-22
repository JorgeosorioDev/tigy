import React, { Component } from 'react';
import Content from '../Content';
import UserNav from '../Common/UserNav';
import NotificationsBar from '../Common/NotificationsBar/NotificationsBar';
import ProvideHelp from '../Common/ProvideHelp/ProvideHelp';
import AskForHelp from '../Common/AskForHelp/AskForHelp';
import SendReward from '../Common/SendReward/SendReward';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="main-home">
                
                <UserNav />
                <Content />
                <NotificationsBar />
                <ProvideHelp />
                <AskForHelp />
                <SendReward />

            </div>
        );
    }
}

export default Home;