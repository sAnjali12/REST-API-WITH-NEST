import * as mongoose from 'mongoose';


export const InfoSchema = new mongoose.Schema({
    name: String,
    age: Number,
    qualification: String,
    hobis: []
  

})