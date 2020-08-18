import { Document } from 'mongoose';

export interface IOwner extends Document {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dapps: []
}
