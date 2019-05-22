import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MyProfile from './components/MyProfile/MyProfile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './reset.css';
import './js/scripts';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/my-profile" component={MyProfile} />
				</div>
			</Router>
		);
	}
}

export default App;