import React, { Component } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import UserMenu from '../UserMenu/UserMenu';
import './UserNav.css';

class UserNav extends Component {
    render() {
        return (
            <nav className="main-nav">
                
                <UserInfo/>
                <UserMenu/>

            </nav>
        );
    }
}

export default UserNav;