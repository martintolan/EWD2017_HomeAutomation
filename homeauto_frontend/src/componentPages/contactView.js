//----------------------------------------------------------------------------
// contactView.js
// View containing all of the information for the contact view
// aspects of the Home Automation Application. 
//----------------------------------------------------------------------------
import React from 'react';
import globalsVars from './../config/globals';
import HomeAutoPageHeader from './HAS_pageheader';


class ContactView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useStubAPI: globalsVars.useStubAPI
    };   
  }// constructor()

  componentWillMount() {
    console.log('contactView.js->ContactView->componentWillMount()');

  }// componentWillMount()

  render(){
    console.log('contactView.js->ContactView->render()');

    return (
			<div>
				<HomeAutoPageHeader HeaderText='Contact... ' SmallText='Contact Page for the Home Automation App. '/>
			</div>

    ); // return
  } // render()
}; // class - contactView


export default ContactView;
