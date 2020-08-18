import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DAppModule } from './DApp/dapp.module'
import { OwnerModule } from './Owner/owner.module';
import { AppuserModule } from './AppUser/appuser.module';
import config from './config/db';

@Module({
  imports: [AppuserModule, OwnerModule, DAppModule, MongooseModule.forRoot(config.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
