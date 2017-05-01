import axios from 'axios';


export const getHeatingData = (areaId) => {
  console.log(`apiHeating->getHeatingData() function called for areaId: ${areaId}...`);
  return axios.get(`/api/heating/${areaId}`)
              .then(resp => resp.data);
};// getHeatingData()

export const getSwitchData = (areaId) => {
  console.log(`apiHeating->getSwitchData() function called for areaId: ${areaId}`);
  return axios.get(`/api/heating/${areaId}/switch`)
              .then(resp => resp.data);
};// getSwitchData()

export const getSetPointData = (areaId) => {
  console.log(`apiHeating->getSetPointData() function called for areaId: ${areaId}`);
  return axios.get(`/api/heating/${areaId}/setpoint`)
              .then(resp => resp.data);
};// getSetPointData()

export const switchHeating = (areaId, command) => {
  console.log(`apiHeating->switchHeating() function called for areaId: ${areaId} with switchCommand: ${command}`);
  return axios.put(`/api/heating/${areaId}/switch`, { heatingOn: command })
              .then(resp => resp.data);
};// switchHeating()

export const updateHeatingSetPoint = (areaId, setPoint) => {
  console.log(`apiHeating->updateHeatingSetPoint() function called for areaId: ${areaId} with new temperature: ${setPoint}`);
  return axios.put(`/api/heating/${areaId}/setpoint`, { thermostatTempValue: setPoint })
              .then(resp => resp.data);
};// updateHeatingSetPoint()
