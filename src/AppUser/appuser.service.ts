import { Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

import { IAppUser } from './interfaces/appuser.interface';
import { CreateAppUserDto } from './dto/create.dto';
import { AppUser } from './schema/appuser.schema'


@Injectable()
export class AppUserService {
   constructor(@InjectModel(AppUser.name) private readonly appUserModel: Model<IAppUser>) {}
       
    
   async findAll(): Promise<IAppUser[]> {
    return await this.appUserModel.find();
  }

  async findOne(id: string): Promise<IAppUser> {
    return await this.appUserModel.findOne({ _id: id });
    
  }

  async create(AppUser: CreateAppUserDto): Promise<IAppUser> {
    const newUser = new this.appUserModel(AppUser);
    return await newUser.save();
  }

  async delete(id: string): Promise<IAppUser> {
    return await this.appUserModel.findByIdAndRemove(id);
  }

  async update(id: string, AppUser: CreateAppUserDto): Promise<IAppUser> {
    return await this.appUserModel.findByIdAndUpdate(id, AppUser, { new: true });
  }

}
