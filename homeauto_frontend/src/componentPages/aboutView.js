//----------------------------------------------------------------------------
// aboutView.js
// View containing all of the information for the about view
// aspects of the Home Automation Application. 
//----------------------------------------------------------------------------
import React from 'react';
import globalsVars from './../config/globals';
import HomeAutoPageHeader from './HAS_pageheader';


class AboutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useStubAPI: globalsVars.useStubAPI
    };   
  }// constructor()

  componentWillMount() {
    console.log('aboutView.js->AboutView->componentWillMount()');

  }// componentWillMount()

  render(){
    console.log('aboutView.js->AboutView->render()');

    return (
			<div>
				<HomeAutoPageHeader HeaderText='About... ' SmallText='About Page for the Home Automation App. '/>
			</div>

    ); // return
  } // render()
}; // class - AboutView


export default AboutView;
