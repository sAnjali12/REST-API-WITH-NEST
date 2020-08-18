import { Document } from 'mongoose';


export interface IDApp extends Document {
    name: String,
    description: String,
    owner_id: Number,
    status: String,
    consumers: []
}


// export interface IExample extends IInfo {
//     xyz: string;
// }