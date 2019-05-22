import React, { Component } from 'react';
import Header from '../Common/Header';
import TitleSection from '../Common/TitleSection';
import Dashboard from '../Dashboard';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className="main-content">
                
                <Header />
                <TitleSection />
                <Dashboard />

            </div>
        );
    }
}

export default Content;