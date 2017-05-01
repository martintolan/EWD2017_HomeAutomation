//----------------------------------------------------------------------------
// App.js
// Landing page view for the Home Automation Application. 
// Contains the Thumbnail tiles for each of the home automation views being 
// monitored. 
//----------------------------------------------------------------------------
import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

class HomeAutoJumboTron extends React.Component{
  handleLearnMore(e) {
    console.log("LearnMore button from the JumboTron pressed...");
    e.preventDefault();
    window.location = '/about';
  }

  render(){
    console.log('App->HomeAutoJumboTron->render()');
    
    return (
      <div className="view-container">
        <Jumbotron>
          <h1>Home Automation Dashboard</h1>
          <p>Providing instant visability into your home system...</p>
          <input type="button" className="btn btn-primary" value="Learn More..." onClick={this.handleLearnMore} />
        </Jumbotron>
      </div>
    ); // return
  } // render
}; // HomeAutoJumboTron


class HomeAutoUtilitiesThumbNails extends React.Component{
  handleHeating(e) {
    console.log("Heating button pressed...");
    e.preventDefault();
    window.location = '/heating';
  }

  handlePower(e) {
    console.log("Power button pressed...");
    e.preventDefault();
    window.location = '/power';
  }

  handleWater(e) {
    console.log("Water button pressed...");
    e.preventDefault();
    window.location = '/water';
  }

  handleLights(e) {
    console.log("Lights button pressed...");
    e.preventDefault();
    window.location = '/lights';
  }

  render(){
    console.log('App->HomeAutoUtilitiesThumbNails->render()');
    
    return (
      <div className="view-container">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="assets/HeatingType2.jpg" alt="242x200">
                <h3>Heating Controls</h3>
                <p>View and control of the heating system</p>
                <p>
                  <input type="button" className="btn btn-primary" value="Heating" onClick={this.handleHeating} />
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="./assets/PowerType1.jpg" alt="242x200">
                <h3>Power Controls</h3>
                <p>View Power Usage</p>
                <p>
                  <input type="button" className="btn btn-primary" value="Power" onClick={this.handlePower} />
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="./assets/WaterTap.jpg" alt="242x200">
                <h3>Water Controls</h3>
                <p>View Water Usage</p>
                <p>
                  <input type="button" className="btn btn-primary" value="Water" onClick={this.handleWater} />
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="./assets/LightBulbType1.jpg" alt="242x200">
                <h3>Lighting Controls</h3>
                <p>Manage Lighting</p>
                <p>
                  <input type="button" className="btn btn-primary" value="Lights" onClick={this.handleLights} />
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    ); // return
  } // render
}; // HomeAutoUtilitiesThumbNails


class HomeAutomationAppDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }// constructor()

  componentWillMount() {
    console.log('App.js->HomeAutomationApp->componentWillMount()');
  }// componentWillMount()

  componentDidMount() {
    console.log('App->HomeAutomationApp->componentDidMount()');
  }// componentDidMount()

  render(){
    console.log('App->HomeAutomationApp->render()');

    return (
      <div className="view-container">
        <HomeAutoJumboTron />
        <HomeAutoUtilitiesThumbNails />
      </div>      
    ); // return
  } // render()
}; // class - HomeAutomationAppDashboard


export default HomeAutomationAppDashboard;
