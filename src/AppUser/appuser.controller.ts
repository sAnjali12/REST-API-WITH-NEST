import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes} from '@nestjs/common';

import { CreateAppUserDto } from './dto/create.dto';
import { AppUserService } from './appuser.service';
import { IAppUser } from './interfaces/appuser.interface';

@Controller('Appuser')
export class AppuserController {
    constructor(private readonly appuserService: AppUserService) {

    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IAppUser>{
        return this.appuserService.findOne(id);
    }

    @Get()
    findAll():  Promise<IAppUser[]>{
        return this.appuserService.findAll();
    }


    @Post()
    create(@Body() createAppUserDto: CreateAppUserDto): Promise<IAppUser>{
        return this.appuserService.create(createAppUserDto)
    }

    
    @Delete(':id')
    // @CacheTTL(30)
    delete(@Param('id') id: string): Promise<IAppUser>{
            return this.appuserService.delete(id);
    }


    @Put(':id')
    update(@Body() updateItemDto: CreateAppUserDto, @Param('id') id: string): Promise<IAppUser> {
      return this.appuserService.update(id, updateItemDto);
    }
}
