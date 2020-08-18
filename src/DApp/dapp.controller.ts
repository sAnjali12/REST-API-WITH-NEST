import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';

import { CreateDAppDto } from './dto/create.dapp.dto';
import { DAppService } from './dapp.service';
import { IDApp } from './interfaces/dapp.interface';


@Controller('DApp')
export class DAppController {
    constructor(private readonly dappService: DAppService) {

    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IDApp>{
        return this.dappService.findOne(id);
    }

    @Get()
    findAll():  Promise<IDApp[]>{
        return this.dappService.findAll();
    }

    @Post()
    create(@Body() createDAppDto: CreateDAppDto): Promise<IDApp>{
        return this.dappService.create(createDAppDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<IDApp>{
            return this.dappService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateDAppDto, @Param('id') id: string): Promise<IDApp> {
      return this.dappService.update(id, updateItemDto);
    }
}
