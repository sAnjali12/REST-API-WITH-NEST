import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { InfoSchema } from './schemas/info.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Information', schema: InfoSchema }]),
  CacheModule.register({
    ttl: 5,
    max: 100,
  })],
  
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
