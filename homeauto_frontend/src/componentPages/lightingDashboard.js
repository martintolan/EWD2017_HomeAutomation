//----------------------------------------------------------------------------
// lightingDashboard.js
// View containing all of the information and data structures for the lighting
// aspects of the Home Automation Application. 
//----------------------------------------------------------------------------
import React from 'react';
import globalsVars from './../config/globals';
import HomeAutoPageHeader from './HAS_pageheader';
import * as APILighting from './../api/LightingAPI';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Modal from 'react-bootstrap/lib/Modal';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';


class LightsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '', 
      newLocation: 1
    };
    this.handleNewNameChange = this.handleNewNameChange.bind(this);
    this.handleNewLocationChange = this.handleNewLocationChange.bind(this);
    this.handleNewLight = this.handleNewLight.bind(this);
  }// constructor()

  handleNewNameChange(e) {
    console.log("NameChange event occurred...");
    this.setState({newName: e.target.value});
  }

  handleNewLocationChange(e) {
    console.log("LocationChange event occurred...");
    this.setState({newLocation: e.target.value});
  }

  handleNewLight(e) {
    console.log("NewLight button pressed...");
    e.preventDefault();
    var name = this.state.newName.trim();
    var location = this.state.newLocation;
    console.log(`NewLight: name: ${name}, location: ${location}`);

    if (!name || location <= 0) {
      return;
    }

    this.props.addNewLightHandler(name, location);
    this.setState({newName: ''});
    this.setState({newLocation: 1});
    document.getElementById('enterTitle').value='';
    document.getElementById('enterArea').value='';
  }

  render(){
    return (
      <tr>
        <td key={'newId'}>
        </td>
        <td key={'newName'}>
          <input type="text" id="enterTitle" className="form-control"placeholder="Room Name" onChange={this.handleNewNameChange} />
        </td>
        <td key={'newLocation'}>
          <input type="number" id="enterArea" className="form-control" placeholder="Area Identifier" onChange={this.handleNewLocationChange} />
        </td>
        <td key={'newLightState'}>
        </td>
        <td>
          <input type="button" className="btn btn-primary" value="Add" onClick={this.handleNewLight} />
        </td>
      </tr>
    )
  }
};


//----------------------------------------------------------------------------
//
// Main class responsible for the Lighting Controls View
// Parent to all of the items displayed in this page view.
//
//----------------------------------------------------------------------------
class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.lightDetail._id,
      title: this.props.lightDetail.title,
      areaId: this.props.lightDetail.areaId,
      lightOn: this.props.lightDetail.lightOn,
      showModal: false
    };
    this.handleTurnLightOn = this.handleTurnLightOn.bind(this);
    this.handleTurnLightOff = this.handleTurnLightOff.bind(this);
    this.handleDeleteMenuItemClicked = this.handleDeleteMenuItemClicked.bind(this);
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }// constructor()

  shouldComponentUpdate(){
    return true;
  }
  componentWillReceiveProps(nextProps){
    console.log('lightingDashboard.js->LightsList->componentWillReceiveProps()');
    this.setState({ _id: nextProps.lightDetail._id });
    this.setState({ title: nextProps.lightDetail.title });
    this.setState({ areaId: nextProps.lightDetail.areaId });
    this.setState({ lightOn: nextProps.lightDetail.lightOn });
  }// componentWillReceiveProps()

  componentWillUpdate(){
    return true;
  }// componentWillUpdate()

  handleTurnLightOn(e) {
    console.log(`Turn Light On button pressed for light: ${this.state.title}`);
    e.preventDefault();

    if(false === this.state.lightOn) {
    	console.log(`Turning the Light ON for ${this.state.title}`);
    	this.props.turnLightOn(this.state._id);
    	this.setState({ lightOn: true });
    }
  } // handleTurnLightOn

  handleTurnLightOff(e) {
    console.log(`Turn Light Off button pressed for light: ${this.state.title}`);
    e.preventDefault();

    if(true === this.state.lightOn) {
    	console.log(`Turning the Light OFF for ${this.state.title}`);
    	this.props.turnLightOff(this.state._id);
    	this.setState({ lightOn: false });
    }
  } // handleTurnLightOff

  handleDeleteMenuItemClicked(e) {
    console.log(`Delete Menu Item Clicked`);
    this.openOverlay();
  } // handleDeleteMenuItemClicked

  closeOverlay() {
    this.setState({ showModal: false });
  }

  openOverlay() {
    this.setState({ showModal: true });
  }

  confirmDelete(){
    console.log(`Confirmed; the light will be deleted...`);
    this.closeOverlay();
    this.props.deleteLight(this.state._id);
  }

  render() {
    console.log('lightingDashboard.js->Light->render()');
    var lightState = 'unknown';
    var buttonStyle = "warning";
    var lightLoation = "unknown";
    if(true === this.state.lightOn)
    {
      lightState = 'On';
      buttonStyle = "success";
    }
    else
    {
      lightState = 'Off';
      buttonStyle = "danger";
    }

    if(globalsVars.areaID_DownStairs === this.state.areaId)
    {
      lightLoation = "Downstairs";
    }
    else
    {
      lightLoation = "Upstairs";
    }

    var fields = [
      <td key={'id'} >{this.state._id}</td>,
      <td key={'name'} >{this.state.title}</td>,
      <td key={'location'}>{lightLoation}</td>,
      <td key={'lightState'}>
        <h4><Label bsStyle={buttonStyle}>{lightState}</Label>&nbsp;</h4>
      </td>,
      <td key={'bottonStateOn'}>
        <input type="button" className='btn btn-success' value='Turn Light On' onClick={this.handleTurnLightOn} />
      </td>,
      <td key={'bottonStateOff'}>
        <input type="button" className='btn btn-info' value='Turn Light Off' onClick={this.handleTurnLightOff} />
      </td>,
      <td key={'adminInput'}>
        <DropdownButton bsStyle='warning' title='Admin' key={1} id={`dropdown-basic-1`}>
          <MenuItem eventKey="1" onClick={this.handleDeleteMenuItemClicked}>Delete Light</MenuItem>
        </DropdownButton>
      </td>
    ];

    return (
      <tr >
        {fields}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Are you sure you want to delete the light?</h4>            
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.closeOverlay}>Cancel</Button>
            <Button bsStyle="danger" onClick={this.confirmDelete}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </tr>
    ); // return
  } // render()
}; // class - Light


//------------------------------------------------------
//
// Builds up a dynamic view based on a table that will 
// populate all of the lights configured in the system.
// All of the lights information are passed in through
// the props. 
//
//------------------------------------------------------
class LightsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightId: -1
    };
  }// constructor()

  componentWillMount() {
    console.log('lightingDashboard.js->LightsList->componentWillMount()');
  	this.setState({ lightId: this.props.lightsInfo._id });
  }// componentWillMount()

  componentWillReceiveProps(nextProps){
    console.log('lightingDashboard.js->LightsList->componentWillReceiveProps()');
    this.setState({ lightId: nextProps.lightsInfo._id });
  }// componentWillReceiveProps()

  componentWillUpdate(){
    console.log('lightingDashboard.js->LightsList->componentWillUpdate()');
    return true;
  }// componentWillUpdate()

  render() {
    console.log('lightingDashboard.js->LightsList->render()');

    var lightsRows = this.props.lightsInfo.map( function(light) { //item => {
      //const objectId = light._id;
      if(light._id !== undefined)
      {
        var uniqueKey = light._id.toString();
        return(
          <Light key={uniqueKey} lightDetail={light} 
            turnLightOn={this.props.turnLightOn}
            turnLightOff={this.props.turnLightOff}
            deleteLight={this.props.deleteLight}
          />
        );
      }
      else
      {
        console.log(`No light object to display yet, returning duff.`);
        return(
          <tr key={'id'} ></tr>
        );
      }
    }.bind(this));
    
    return (
      <tbody >
        {lightsRows}
        <LightsForm addNewLightHandler={this.props.addNewLightsHandler} />
      </tbody>
    ); // return()
  } // render()
}; // class - LightsList



//------------------------------------------------------
//
// Builds up a dynamic view based on a table that will 
// populate all of the lights configured in the system.
// All of the lights information are passed in through
// the props. 
//
//------------------------------------------------------
class LightingTable extends React.Component {	
  constructor(props) {
    super(props);
    this.state = {
      lightingInfo: [{}],
      downstairsMapPanelOpen: false,
      upstairsMapPanelOpen: false
    };
    this.handleTurnAllLightsOn = this.handleTurnAllLightsOn.bind(this);
    this.handleTurnAllLightsOff = this.handleTurnAllLightsOff.bind(this);
  }// constructor()

  componentWillMount() {
    console.log('lightingDashboard.js->LightingTable->componentWillMount()');
  }// componentWillMount()

  componentDidMount() {
    console.log('lightingDashboard.js->LightingTable->componentDidMount()');
    this.setState({lightingInfo: this.props.allLightsInfo});
  }// componentDidMount()

  componentWillReceiveProps(nextProps){
    console.log('lightingDashboard.js->LightingTable->componentWillReceiveProps()');
    this.setState({ lightingInfo: nextProps.lightingInfo });
  }// componentWillReceiveProps

  componentWillUpdate(){
    console.log('lightingDashboard.js->LightingTable->componentWillUpdate()');
    return true;
  }// componentWillUpdate

  handleTurnAllLightsOn(e) {
    console.log("TurnAllLightsOn button pressed");
    e.preventDefault();
    this.props.AllLightsOnHandler();
  } // handleTurnAllLightsOn

  handleTurnAllLightsOff(e) {
    console.log("TurnAllLightsOff button pressed");
    e.preventDefault();
    this.props.AllLightsOffHandler();
  } // handleTurnAllLightsOff

  render() {
    console.log('lightingDashboard.js->LightingTable->render()');
    const titleAll = (
      <h3>All Lighting Controls</h3>
    );
    const titleIndividual = (
      <h3>Individual Lighting Controls</h3>
    );

    return (
      <div>
        <Panel header={titleAll} bsStyle="primary">
          <h3><Label bsStyle="warning">Lights being Monitored: {this.props.numberOfLights}, Number of Lights On: {this.props.numberOfLightsOn}</Label>&nbsp;</h3>
          <ButtonToolbar>
            <input type="button" className='btn btn-success' value='Turn All Lights On' onClick={this.handleTurnAllLightsOn} />
            <input type="button" className='btn btn-danger' value='Turn All Lights Off' onClick={this.handleTurnAllLightsOff} />
          </ButtonToolbar>
        </Panel>
        <Panel header={titleIndividual} bsStyle="primary">
          <table className="table table-bordered" >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Light State</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <LightsList lightsInfo={this.props.allLightsInfo} 
              turnLightOn={this.props.LightOnHandler}
              turnLightOff={this.props.LightOffHandler} 
              deleteLight={this.props.deleteLight}
              addNewLightsHandler={this.props.addLightsHandler}
            />
          </table>
          <Button onClick={ ()=> this.setState({ downstairsMapPanelOpen: !this.state.downstairsMapPanelOpen })}>
            Downstairs Map
          </Button>
          <Panel collapsible expanded={this.state.downstairsMapPanelOpen}>
            <Thumbnail src="./../assets/DownStairsMap01.jpg" alt="242x200" />
          </Panel>
          <Button onClick={ ()=> this.setState({ upstairsMapPanelOpen: !this.state.upstairsMapPanelOpen })}>
            Upstairs Map
          </Button>
          <Panel collapsible expanded={this.state.upstairsMapPanelOpen}>
            <Thumbnail src="./../assets/UpStairsMap01.jpg" alt="242x200" />
          </Panel>
        </Panel>
      </div>
    ); // return
  } // render()
}; // class - LightingTable


//----------------------------------------------------------------------------
//
// Main class responsible for the Lighting Controls View
// Parent to all of the items displayed in this page view.
//
//----------------------------------------------------------------------------
class LightingDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightingInfo: [{}]
    };
    this.turnAllLightsOnRequest = this.turnAllLightsOnRequest.bind(this);
    this.turnAllLightsOffRequest = this.turnAllLightsOffRequest.bind(this);
    this.addNewLightRequest = this.addNewLightRequest.bind(this);
    this.deleteLightRequest = this.deleteLightRequest.bind(this);
    this.turnLightOnRequest = this.turnLightOnRequest.bind(this);
    this.turnLightOffRequest = this.turnLightOffRequest.bind(this);
  }// constructor()

  componentWillMount() {
    console.log('lightingDashboard.js->LightingDashboard->componentWillMount()');
  }// componentWillMount()

  componentDidMount() {
    console.log('lightingDashboard.js->LightingDashboard->componentDidMount()');
    var p = APILighting.getAllLightingData();
    p.then( response => { 
      console.log('lightingDashboard.js->LightingDashboard->componentDidMount(); promise for getAllLightingData() returned...');
      this.setState({lightingInfo: response});
    });
  }// componentDidMount()

  componentWillReceiveProps(nextProps){
    console.log('lightingDashboard.js->LightingDashboard->componentWillReceiveProps()');
    this.setState({ lightingInfo: nextProps.lightingInfo });
  }// componentWillReceiveProps

  componentWillUpdate(){
    console.log('lightingDashboard.js->LightingDashboard->componentWillUpdate()');
    return true;
  }// componentWillUpdate

  turnAllLightsOnRequest() {
    console.log(`Calling the turnAllLightsOnRequest() callback function`);
    APILighting.setAllLightsState(globalsVars.switchLightOn).then ( response => {
      var p = APILighting.getAllLightingData();
      p.then( response => { 
        this.setState({lightingInfo: response});
      });
    }).catch( error => {console.log( `turnAllLightsOnRequest() failed for ${error}` )}) ;
  } // turnAllLightsOnRequest

  turnAllLightsOffRequest() {
    console.log(`Calling the turnAllLightsOffRequest() callback function`);
    APILighting.setAllLightsState(globalsVars.switchLightOff).then ( response => {
      var p = APILighting.getAllLightingData();
      p.then( response => { 
        this.setState({lightingInfo: response});
      });
    }).catch( error => {console.log( `turnAllLightsOffRequest() failed for ${error}` )}) ;
  } // turnAllLightsOffRequest

  addNewLightRequest(name, location) {
    console.log(`Calling the addNewLightRequest() callback function for the room: ${name}, area: ${location}`);
    APILighting.addNewLight(name, location).then ( response => {
      var p = APILighting.getAllLightingData();
      p.then( response => { 
        this.setState({lightingInfo: response});
      });
    }).catch( error => {console.log( `addNewLightRequest() failed for ${error}` )}) ;
  } // addNewLightRequest

  deleteLightRequest(lightId) {
    console.log(`Calling the deleteLightRequest() callback function for the lightId: ${lightId}`);
    APILighting.deleteLight(lightId).then ( response => {
      var p = APILighting.getAllLightingData();
      p.then( response => { 
        this.setState({lightingInfo: response});
      });
    }).catch( error => {console.log( `deleteLightRequest() failed for ${error}` )}) ;
  } // deleteLightRequest

  turnLightOnRequest(lightId) {
    console.log(`Calling the turnLightOnRequest() callback function`);
    APILighting.setLightsState(lightId, globalsVars.switchLightOn).then ( response => {
      var p = APILighting.getAllLightingData();
      p.then( response => { 
        this.setState({lightingInfo: response});
      });
    }).catch( error => {console.log( `turnLightOnRequest() failed for ${error}` )}) ;
  } // turnLightOnRequest

  turnLightOffRequest(lightId) {
    console.log(`Calling the turnLightOffRequest() callback function`);
    APILighting.setLightsState(lightId, globalsVars.switchLightOff).then ( response => {
      var p = APILighting.getAllLightingData();
      p.then( response => { 
        this.setState({lightingInfo: response});
      });
    }).catch( error => {console.log( `turnLightOffRequest() failed for ${error}` )}) ;
  } // turnLightOffRequest


  render() {
    console.log('lightingDashboard.js->LightingDashboard->render()');
    const numberOfLightsBeingMonitored = this.state.lightingInfo.length;
    var numLightsOn = 0;
    var count = this.state.lightingInfo.map(function(light) {
        if(light.lightOn === true)
        { 
          numLightsOn++;
        }
        return(numLightsOn);
    });

    return (
			<div>
				<HomeAutoPageHeader HeaderText='Lighting Control ' SmallText='Use this page to monitor and control the lighting elements in your home. '/>
        <LightingTable id="lighting-table" 
          allLightsInfo={this.state.lightingInfo}
          numberOfLights={numberOfLightsBeingMonitored}
          numberOfLightsOn={numLightsOn}
          AllLightsOnHandler={this.turnAllLightsOnRequest}
          AllLightsOffHandler={this.turnAllLightsOffRequest}
          LightOnHandler={this.turnLightOnRequest}
          LightOffHandler={this.turnLightOffRequest}
          deleteLight={this.deleteLightRequest}
          addLightsHandler={this.addNewLightRequest}
        />
			</div>
    ); // return
  } // render()
}; // class - LightingDashboard


export default LightingDashboard;
