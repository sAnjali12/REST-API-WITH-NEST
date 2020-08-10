import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, 
    UseInterceptors, CacheInterceptor, CacheKey, CacheTTL} from '@nestjs/common';

import { CreateInfoDto } from './dto/create.info.dto';
import { InfoService } from './info.service';
import { IInfo } from './interfaces/info.interface';
import { ValidationPipe } from '../pipes/validation.pipe'
import { BenchmarkInterceptor } from '../interceptors/benchmaerk.interceptor'


@Controller('info')
@UseInterceptors(CacheInterceptor, BenchmarkInterceptor)
export class InfoController {
    constructor(private readonly infoService: InfoService) {

    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IInfo>{
        return this.infoService.findOne(id);
    }

    @Get()
    @CacheKey('all Infos')
    @CacheTTL(15)
    findAll():  Promise<IInfo[]>{
        return this.infoService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createInfoDto: CreateInfoDto): Promise<IInfo>{
        return this.infoService.create(createInfoDto)
    }

    @Delete(':id')
    @CacheTTL(30)
    delete(@Param('id') id: string): Promise<IInfo>{
            return this.infoService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateInfoDto, @Param('id') id: string): Promise<IInfo> {
      return this.infoService.update(id, updateItemDto);
    }
}
