const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const LightingSchema = new Schema({
  title: { type: String, required: `Title for the room is Required!` },
  areaId: { type: Number, min: 1, max: 2, required: `Floor area id for the room is required!` },
  lightOn: { type: Boolean, default: false }
});

LightingSchema.path('title').validate((v)=>{
    if( v.length > 100 || v.length < 2 )
    {
        return false;
    }
    return true;
});


export default mongoose.model('lighting', LightingSchema);
