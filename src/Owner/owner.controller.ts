import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes} from '@nestjs/common';

import { CreateOwnerDto } from './dto/create.dto';
import { OwnerService } from './owner.service';
import { IOwner } from './interfaces/owner.interface';

@Controller('Owner')
export class OwnerController {
    constructor(private readonly ownerService: OwnerService) {

    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IOwner>{
        return this.ownerService.findOne(id);
    }

    @Get()
    findAll():  Promise<IOwner[]>{
        return this.ownerService.findAll();
    }


    @Post()
    create(@Body() createOwnerDto: CreateOwnerDto): Promise<IOwner>{
        return this.ownerService.create(createOwnerDto)
    }

    
    @Delete(':id')
    // @CacheTTL(30)
    delete(@Param('id') id: string): Promise<IOwner>{
            return this.ownerService.delete(id);
    }


    @Put(':id')
    update(@Body() updateItemDto: CreateOwnerDto, @Param('id') id: string): Promise<IOwner> {
      return this.ownerService.update(id, updateItemDto);
    }
}
