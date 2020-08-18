import { Document } from 'mongoose';

export interface IAppUser extends Document {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dapp_id: []
}
