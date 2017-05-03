# EWD2017_HomeAutomation
# Assignment 2 - Node backend with Mongo DB interacting with the ReactJS app frontend.

## Overview.
The basic idea of the app is a Home Automation system that has a fully-fledged Node backend that serves all of the Rest APIs required by the frontend app. The Node backend also interacts with a MongoDB for all of its data persistence requirements. The MongoDB is queried for all REST transactions where data is used. The Web API supports all of the frontend APIs using the following technologies:
- Node 
- Express
- MongoDB
- Mongoose
As the Assignment matured the react app frontend has been extended to include additional features supported by the Node backend.

When started up the landing page will bring the user to a dashboard that will give them options of where to go. Nnavagation from here will cause the react app to make Rest APIs into the Node backend. As the app is fully routed the node backend has full support for all of these routes. 
Additional views were added to the app in particular the "Lighting" view. This has been completly redesigned to take full advantage of the full CRUD functionality available from the Node backend. 

## Installation requirements.
. . . .  Full List of software used to develop the Node backend . . . . . . . 
+ body-parser: "^1.17.1",
+ express: "^4.15.2",
+ lodash: "^4.17.4",
+ mongoose: "^4.9.6",
+ bootstrap: "^3.3.6",
+ babel-cli: "^6.24.1",
+ babel-preset-es2015: "^6.22.0",
+ babel-preset-stage-2: "^6.22.0",
+ compression: "^1.6.2",
+ react: "^15.4.2",
+ react-dom: "^15.4.2",
+ react-router: "^2.6.1",
+ axios: "^0.15.3"

## Build Instruction.
+ Clone the repo from git
+ goto the "homeautomation" directory 
+ execute "npm install" 		-> Install dependancies defined within "packages.json"
+ install mongoDB           -> Choose appropriate version for the OS 
+ start mongoDB
+ open onother terminal in the "homeautomation" root folder and start the application
+ "npm start"
+ Open a tab in your web browser and goto http://localhost:8080/
+ The app can now be viewed in the browser, use the navigation bar to move through th app and issue calls to the Node backend. Use "f12" to open the console to view all of the debug messages from the app as you navigate around the app. 

## Data Model Design.
There are several data models used in the homeautomation app:
![][image1_dbcollections]

+ heatingModelDS {
    title: "Downstairs",
    areaId: 1,
    currentTemp: 23,
    temperature_rows: [["11:29", 23.1], ["11:28", 20.2], ["11:27", 19.3], ["11:26", 18.5], ["11:25", 21.1], 
                      ["11:24", 17.2], ["11:23", 21.9], ["11:22", 24.3], ["11:21", 18.5], ["11:20", 22.5]
    ],
    thermostatTempValue: 18.3,
    heatingOn: false
  }
![][image2_heating_downstairs]

+ heatingModelUS {
	  title: "Upstairs",
    areaId: 2,
	  currentTemp: 21,	
	  temperature_rows: [["11:29", 21.1], ["11:28", 22.2], ["11:27", 20.3], ["11:26", 22.5], ["11:25", 23.1], 
		 	 				        ["11:24", 21.2], ["11:23", 20.9], ["11:22", 20.3], ["11:21", 19.5], ["11:20", 20.5]
    ],
    thermostatTempValue: 20.5,
    heatingOn: true
  }
![][image3_heating_upstairs]

+ lightingModel 
  [
    {
      title: "Sitting Room",
      areaId: 1,
      lightOn: true
    }
  ]
![][image4_lightings]

When the system starts up the default documents are inserted into the mongo DB in the appropriate collections if the seed DB variable is set. 
All of this data is used by the node backend to provide data to the frontend and is also updated by the backend. 


## Web API Routing supported.
The list of all supported routes is described here:
![][image5_webroutes]

It can be seen that the /api/lighting route provides full CRUD functionality and it is fully demonstrated within the app. 

## Node backend layout.
![][image6_nodebackendlayout]

## Demonstration of CRUD functionality
The view for the set of lighting controls exploits all of the CRUD functionality exposed by the Node backend into the Mongo DB. 
+ Create: This is the "Add" new light feature, a new instance of the light is added to the DB.
+ Read: All of the light items displayed on the view originated in the mongo DB as documents within the lightings collection. 
+ Update: Two types of update here; First) all documents within the collection are updated based on the "All lights On2 and "All lights off" buttons, Two) individual light document updated based on the buttons associated with the light itself. 
+ Delete: The admin drop down Delete function will delete the light document from the collection inthe DB if the user confirm the action. 

This can be seen in the image:
![][image7_lightingcrud] 


[image1]: ./github_assets/image1_dbcollections.jpg
[image2]: ./github_assets/image2_heating_downstairs.jpg
[image3_heating_upstairs]: ./github_assets/image3_heating_upstairs.jpg
[image4_lightings]: ./github_assets/image4_lightings.jpg
[image5_webroutes]: ./github_assets/image5_webroutes.jpg
[image6_nodebackendlayout]: ./github_assets/image6_nodebackendlayout.
[image7_lightingcrud]: ./github_assets/image7_lightingcrud.jpg
