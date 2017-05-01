//----------------------------------------------------------------------------
// powerDashboard.js
// View containing all of the information and data structures for the power
// aspects of the Home Automation Application. 
//----------------------------------------------------------------------------
import React from 'react';
import globalsVars from './../config/globals';
import HomeAutoPageHeader from './HAS_pageheader';


//----------------------------------------------------------------------------
//
// Main class responsible for the Power Controls View
// Parent to all of the items displayed in this page view.
//
//----------------------------------------------------------------------------
class PowerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useStubAPI: globalsVars.useStubAPI
    };   
  }// constructor()

  componentWillMount() {
    console.log('powerDashBoard.js->PowerDashboard->componentWillMount()');

  }// componentWillMount()

  render(){
    console.log('powerDashBoard.js->PowerDashboard->render()');

    return (
			<div>
				<HomeAutoPageHeader HeaderText='Power Control ' SmallText='Use this page to monitor and control the power elements in your home. '/>
			</div>

    ); // return
  } // render()
}; // class - PowerDashboard


export default PowerDashboard;
