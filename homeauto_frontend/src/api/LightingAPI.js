import axios from 'axios';

// get the status for all lights
export const getAllLightingData = () => {
  console.log(`apiLighting->getAllLightingData() function called`);
  return axios.get(`/api/lighting`)
              .then(resp => resp.data);
};// getAllLightingData()

// add a new light to the list of lights
export const addNewLight = (lightName, lightArea) => {
  console.log(`apiLighting->addNewLight() function called with name: ${lightName} and ares: ${lightArea}`);
  return axios.post(`/api/lighting`, { title: lightName, areaId: lightArea, lightOn: false })
              .then(resp => resp.data);
};// addNewLight()

// set the state for all the lights: ON of OFF
export const setAllLightsState = (command) => {
  console.log(`apiLighting->setAllLightsState() function called with switch command: ${command}`);
  return axios.put(`/api/lighting`, { lightOn: command })
              .then(resp => resp.data);
};// setAllLightsState()

// delete the specified light
export const deleteLight = (lightId) => {
  console.log(`apiLighting->deleteLight() function called for light with ID: ${lightId}`);
  return axios.delete(`/api/lighting/${lightId}`)
              .then(resp => resp.data);
};// deleteLight()

// get the data for the specified light
export const getLightData = (lightId) => {
  console.log(`apiLighting->getLightData() function called for light with ID: ${lightId}`);
  return axios.get(`/api/lighting/${lightId}`)
              .then(resp => resp.data);
};// getLightData()

// set the state for the specified  light: ON of OFF
export const setLightsState = (lightId, command) => {
  console.log(`apiLighting->setLightsState() function called with light ID: ${lightId} and On/Off command: ${command}`);
  return axios.put(`/api/lighting/${lightId}`, { lightOn: command })
              .then(resp => resp.data);
};// setLightsState()
