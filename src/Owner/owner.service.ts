import { Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

import { IOwner } from './interfaces/owner.interface';
import { CreateOwnerDto } from './dto/create.dto';
import { Owner } from './schema/owner.schema'


@Injectable()
export class OwnerService {
   constructor(@InjectModel(Owner.name) private readonly ownerModel: Model<IOwner>) {}
       
    
   async findAll(): Promise<IOwner[]> {
    return await this.ownerModel.find();
  }

  async findOne(id: string): Promise<IOwner> {
    return await this.ownerModel.findOne({ _id: id });
    
  }

  async create(owner: CreateOwnerDto): Promise<IOwner> {
    const newOwner = new this.ownerModel(owner);
    return await newOwner.save();
  }

  async delete(id: string): Promise<IOwner> {
    return await this.ownerModel.findByIdAndRemove(id);
  }

  async update(id: string, owner: CreateOwnerDto): Promise<IOwner> {
    return await this.ownerModel.findByIdAndUpdate(id, owner, { new: true });
  }

}
