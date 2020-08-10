import { Injectable,  HttpException, HttpStatus  } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

import { IInfo } from './interfaces/info.interface';


@Injectable()
export class InfoService {
   constructor(@InjectModel('Information') private readonly infoModel: Model<IInfo>) {}
       
    
   async findAll(): Promise<IInfo[]> {
    return await this.infoModel.find();
  }

  async findOne(id: string): Promise<IInfo> {
    try {
      const info = await this.infoModel.findOne({ _id: id });
     if(!info) {
        throw new HttpException( id, HttpStatus.NOT_FOUND)
      }
      return info;
    } catch (err) {
      throw new HttpException(`Not found this id: ${id}`, HttpStatus.NOT_FOUND)
    }
  }

  async create(info: IInfo): Promise<IInfo> {
    const newInfo = new this.infoModel(info);
    return await newInfo.save();
  }

  async delete(id: string): Promise<IInfo> {
    return await this.infoModel.findByIdAndRemove(id);
  }

  async update(id: string, info: IInfo): Promise<IInfo> {
    return await this.infoModel.findByIdAndUpdate(id, info, { new: true });
  }

}
