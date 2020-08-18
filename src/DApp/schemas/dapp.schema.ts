import * as mongoose from 'mongoose';

export const DAppSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner_id: Number,
    status: String,
    consumers: []

})



