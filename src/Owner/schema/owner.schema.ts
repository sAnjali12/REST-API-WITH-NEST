import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Owner extends Document{
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
    dapps: []

}

export const OwnerSchema = SchemaFactory.createForClass(Owner);