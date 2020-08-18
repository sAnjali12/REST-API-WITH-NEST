import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DAppController } from './dapp.controller';
import { DAppService } from './dapp.service';
import { DAppSchema } from './schemas/dapp.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'dapp', schema: DAppSchema }])],
  
  controllers: [DAppController],
  providers: [DAppService],
  
})
export class DAppModule {}
