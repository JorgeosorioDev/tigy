import React, { Component } from 'react';
import Header from '../Common/Header';
import UserNav from '../Common/UserNav';
import TitleSection from '../Common/TitleSection';
import MyPosts from '../Common/MyPosts/MyPosts';
import GroupBar from '../Common/GroupBar';
import ProfileBar from '../Common/ProfileBar/ProfileBar';
import NotificationsBar from '../Common/NotificationsBar/NotificationsBar';
import './MyProfile.css';

class MyProfile extends Component {
    render() {
        return (
            <div className="my-profile">

                <UserNav/>
                <NotificationsBar />

                <div className="main-content">

                    <Header/>
                    <TitleSection/>

                    <div className="dashboard">

                        <ProfileBar/>
                        <MyPosts />
                        <GroupBar/>

                    </div>


                </div>


            </div>
        );
    }
}

export default MyProfile;