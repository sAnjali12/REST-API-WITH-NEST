import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AppUser extends Document{
    @Prop()
    username:  {
        type:string,
        unique: true
    }

    @Prop()
    firstName:  {
        type:string,
        required: true,
    }

    @Prop()
    lastName: {
        type:string,
        required: true,
    }

    @Prop()
    email: {
        type:string,
        unique: true
    }

    @Prop()
    dapp_id: []

}

export const AppUserSchema = SchemaFactory.createForClass(AppUser);