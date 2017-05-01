//----------------------------------------------------------------------------
// index.js
// The loaded javascript when the application starts up in the browser. This
// app will form the structure and define the routes for all of the views 
// within the Home Automation Application.
//----------------------------------------------------------------------------
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeAutomationApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomeAutoNavBar from './componentPages/HAS_navbar';
import HeatingDashboard from './componentPages/heatingDashboard';
import PowerDashboard from './componentPages/powerDashboard';
import WaterDashboard from './componentPages/waterDashboard';
import LightingDashboard from './componentPages/lightingDashboard';
import AboutView from './componentPages/aboutView';
import ContactView from './componentPages/contactView';


class App extends React.Component {
	render() {
		return (
			<div>
				<HomeAutoNavBar />
				{this.props.children}
			</div>
		);
	}// render()
};// class - App

class HeatingApp extends React.Component {
	render() {
		return (
			<div>
				<HeatingDashboard />
			</div>
		);
	}// render()
};// class - HeatingApp

class PowerApp extends React.Component {
	render() {
		return (
			<div>
				<PowerDashboard />
			</div>
		);
	}// render()
};// class - PowerApp

class WaterApp extends React.Component {
	render() {
		return (
			<div>
				<WaterDashboard />
			</div>
		);
	}// render()
};// class - WaterApp

class LightsApp extends React.Component {
	render() {
		return (
			<div>
				<LightingDashboard />
			</div>
		);
	}// render()
};// class - LightsApp

class AboutApp extends React.Component {
	render() {
		return (
			<div>
				<AboutView />
			</div>
		);
	}// return
};// class - AboutApp


class ContactApp extends React.Component {
	render() {
		return (
			<div>
				<ContactView />
			</div>
		);
	}// render()
};// class - ContactApp


ReactDOM.render((
	<Router history={browserHistory} >
		<Route path="/" component={App}>
			<IndexRoute component={HomeAutomationApp} />
			<Route path="about" component={AboutApp} />
			<Route path="contact" component={ContactApp} />
			<Route path="heating" component={HeatingApp} />
			<Route path="power" component={PowerApp} />
			<Route path="water" component={WaterApp} />
			<Route path="lights" component={LightsApp} />
		</Route>
	</Router>
	),
  document.getElementById('root')
);// ReactDOM.Render()
