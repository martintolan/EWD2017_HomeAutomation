//----------------------------------------------------------------------------
// lightingDashboard.js
// View containing all of the information and data structures for the lighting
// aspects of the Home Automation Application. 
//----------------------------------------------------------------------------
import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class HomeAutoPageHeader extends React.Component {
  render() {
    console.log('HAS_pageheader.js->HomeAutoPageHeader->render()');

    return (
			<div>
				<PageHeader>{this.props.HeaderText} <small>{this.props.SmallText} </small></PageHeader>
			</div>

    ); // return
  } // render()
}; // class - HomeAutoPageHeader


export default HomeAutoPageHeader;
