# Assignment 1 - ReactJS app.

Name: Martin Tolan

## Overview.
...... A statement of the app concept and objectives (about a half-page) ........
The basic idea of the app is a Home Automation system. When started up the landing page will bring the user to a dashboard that will give them options of where to go. There is full navagation available from every page that is displayed and the app is fully routed so that you can move between views with no problem. 
The dashboard is the starting point that contains the details of the supported aspects that are being monitored by the application. Each monitored area is represented by the following:
- thumbnail tile with a picture
- some detail about whats being monitored (if the picure is not self explanitory!)
- a button to access the monitored aspect (beings you to that aspects' view)
Each view has the same highlevel layout in that there is the exact same navbar prsent in each of the views. 

The app has made great use of the ReactBootstrap framework and all of the views have been styled in an appropriate manner. 


 . . . . . List of user features (excluding user registration and authentication) . . . . 

 + Multiple views where the UI design includes a Component hierarchy (HomeAutomationAppDashboard and also the HeatingDashboard) that contains some Stateful components, all with good styling.
 + Routing: 6+ routes defines and all routes include the same basic structure including the NavBar at the top of each view providing header navigation.
 + Data Model, two data model has been defined so far and these are both related to the Heating view (upstairs & downstairs models). 
 + Clear use of most of the elements of the Lectures and some extra items including the Graphing widget for displaying the temperature trends over time. 
 + Use of both StubAPI and Mock JSON Server to facilitate testing. 
 
 List of additional features:
 + Navigation is consistent by reuse of the same NavBar component accross all views.
 + Consistent layout of all views - makes the UI easier and more intuitive. 
 + Reactive feedback based on user input, widgets update in realtime.
 + Hierarchial component design - results in component reuse and only the required components are re-rendered if required and not the entire view. The down stairs and upstairs views are based on the same components in the code.
 + Local browser storage used for data.
 + Heating - Realtime control for the following:
 ++ Turn the heating on/off for a particular floor
 ++ Set the desired temperature for a particular floor
 ++ View a trend of the temperature historical data for a particular floor

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ "react": "^15.4.2",
+ "react-dom": "^15.4.2",
+ "bootstrap": "^3.3.6",
+ "react-bootstrap": "^0.30.8",
+ "lodash": "^2.4.2",
+ "react-router": "^2.6.1",
+ "superagent": "^1.6.1",
+ "react-google-charts": "^1.5.4-alpha.1",
+ "react-rangeslider": "^2.0.1",
+ "react-thermometer": "0.0.3"

. . . . . . Also, explain (to a third party) what steps one must take to run your app after cloning it from the repository, e.g. any non-standard software installation; any environment setup; how to start app; where to view app in browser . . . . . . . At its simplest this may just be: npm install + npm start
+ Clone the repo from git
+ goto the "home-automation" directory 
+ execute "npm install" 		-> Install dependancies defined within "packages.json"
+ "npm install -g json-server"	-> Installs a json-server utility to mock the responses to a Web API. 
+ open terminal in "home-automation\src\test" and start the json server
+ "json-server ./temperatureData.json"	-> contains all of the information for the heating system data model.
+ open onother terminal in "home-automation" and start the application
+ "npm start"					-> Execute from the root of a ReactApp folder, starts the app. Covers the following:
									Starts a development web server on port 3000.
									Opens a tab in your default web browser and issue a HTTP request to http://localhost:3000/
									Transpiles any JSX and ES6 code in src/index.js and its imports (src/App.js) to vanilla JS.
									Sends index.html and relevant assets (JS, CSS) to the requesting browser.
									Perform live reloading - watches all project source files for changes; re-transpiles and reload the app in the browser when changes occur.
+ The app can now be viewed in the browser, use "f12" to open the console to view all of the debug messages from the app as you navigate around the app. 


## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).
Use meaningful sample data. Briefly explain any non-trivial issues.

This are the two datamodels for the HeatingDashboard: down stairs & upstairs. Both have been served up from the StubAPI tester and the Mock JSON Server with success. 
{
  "temperatureDataDownStairs": 
    {
      "title": "Downstairs",
      "currentTemp": 23,      
      "temperature_rows": [["11:29", 23.1], ["11:28", 20.2], ["11:27", 19.3], ["11:26", 18.5], ["11:25", 21.1], 
                    ["11:24", 17.2], ["11:23", 21.9], ["11:22", 24.3], ["11:21", 18.5], ["11:20", 22.5]
      ],
      "thermostatTempValue": 18.3,
      "HeatingOn": false
    },
  
  "temperatureDataUpStairs": 
    {
      "title": "Upstairs",
      "currentTemp": 21,      
      "temperature_rows": [["11:29", 21.1], ["11:28", 22.2], ["11:27", 20.3], ["11:26", 22.5], ["11:25", 23.1], 
                  ["11:24", 21.2], ["11:23", 20.9], ["11:22", 20.3], ["11:21", 19.5], ["11:20", 20.5]
      ],
      "thermostatTempValue": 20.5,
      "HeatingOn": true
    }
}

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][image1]
![][image2]

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . . 

Landing page for the app. Note navigation is via the buttons on the thumbnail tiles or from the nav bar at the top of the view. 
![][image3]

Heating Dashboard, currently only displaying the DownStairs heating status (view too big to capture in single screenshot). Note that the buttons for "Heating On" and "Heating Off" and the Slider for the temperature can all be modified. The feedback goes all the way to the API interface to inform the backend of the users selection. 
![][image4]

One of the many views that have been routed BUT have not been implemented yet! 
![][image5]


## Routing.
. . . . List each route supported and state the associated view . . . . . 

+ / 		- the default dashboard 
+ /heating 	- displays the heating information and settings for the upstairs and downstairs heating elements
+ /power 	- displays the power information and settings for the entire property - not implemented yet
+ /water 	- displays the water usage information and settings for the entire property - not implemented yet
+ /lights 	- displays the lighting information and settings for the entire property - not implemented yet
+ /about 	- displays the information about this app - not implemented yet
+ /contact 	- displays the contact information for this app - not implemented yet


## Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  
+ Graphing Feature: Third party control that I integrated into the app to allow the pp to trend date ocewr time. 
+ Themonitor: Third party control used to display the current temperature.

## Independent learning.

. . . . . State the non-standard aspects of React (or other related technologies) that you researched and applied in this assignment . . . . .  



[image1]: ./github_assets/HierarchicalComponentDesign-HomeAutomationAppDashboard.jpg
[image2]: ./github_assets/HierarchicalComponentDesign-HeatingDashboard.jpg
[image3]: ./github_assets/ScreenShot1-HomeAutomationAppDashboard.jpg
[image4]: ./github_assets/ScreenShot2-HeatingDashboard.jpg
[image5]: ./github_assets/ScreenShot3-PowerDashboard.jpg