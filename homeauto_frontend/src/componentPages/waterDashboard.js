//----------------------------------------------------------------------------
// waterDashboard.js
// View containing all of the information and data structures for the water
// aspects of the Home Automation Application. 
//----------------------------------------------------------------------------
import React from 'react';
import globalsVars from './../config/globals';
import HomeAutoPageHeader from './HAS_pageheader';

//----------------------------------------------------------------------------
//
// Main class responsible for the Water Controls View
// Parent to all of the items displayed in this page view.
//
//----------------------------------------------------------------------------
class WaterDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useStubAPI: globalsVars.useStubAPI
    };   
  }// constructor()

  componentWillMount() {
    console.log('waterDashboard.js->WaterDashboard->componentWillMount()');
    
  }// componentWillMount()

  render(){
    console.log('waterDashboard.js->WaterDashboard->render()');

    return (
			<div>
				<HomeAutoPageHeader HeaderText='Water Control ' SmallText='Use this page to monitor and control the water elements in your home. '/>
			</div>

    ); // return
  } // render()
}; // class - WaterDashboard


export default WaterDashboard;
