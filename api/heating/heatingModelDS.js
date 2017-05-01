const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const HeatingSchemaDS = new Schema({
  title: { type: String, required: `Title for the heating area is Required!` },
  areaId: { type: Number, min: 1, max: 2, required: `Floor area id for the heating area is required!` },
  currentTemp: { type: Number, max: 80, required: `Current Temperature is always required` },
  thermostatTempValue: {type: Number, min: 0, max: 80, required: `Therostat Temperature setting is always required` },
  heatingOn: { type: Boolean, default: false }
});

HeatingSchemaDS.path('title').validate((v)=>{
    if( v.length > 100 || v.length < 2 )
    {
        return false;
    }
    return true;
});


export default mongoose.model('heating_downstairs', HeatingSchemaDS);
