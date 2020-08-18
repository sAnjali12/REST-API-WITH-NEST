import { Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

import { IDApp } from './interfaces/dapp.interface';
import { CreateDAppDto } from './dto/create.dapp.dto';



@Injectable()
export class DAppService {
   constructor(@InjectModel('dapp') private readonly dappModel: Model<IDApp>) {}
       
    
   async findAll(): Promise<IDApp[]> {
    return await this.dappModel.find();
  }

  async findOne(id: string): Promise<IDApp> {
    return await this.dappModel.findOne({ _id: id });
    
  }

  async create(dapp: CreateDAppDto): Promise<IDApp> {
    const newDApp = new this.dappModel(dapp);
    return await newDApp.save();
  }

  async delete(id: string): Promise<IDApp> {
    return await this.dappModel.findByIdAndRemove(id);
  }

  async update(id: string, dapp: CreateDAppDto): Promise<IDApp> {
    return await this.dappModel.findByIdAndUpdate(id, dapp, { new: true });
  }

}
