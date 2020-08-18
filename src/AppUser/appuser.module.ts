import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { AppuserController } from './appuser.controller';
import { AppUserService } from './appuser.service';
import { AppUser, AppUserSchema } from './schema/appuser.schema'


@Module({
  imports: [MongooseModule.forFeature([{ name: AppUser.name, schema: AppUserSchema }])],
  
  controllers: [AppuserController],
  providers: [AppUserService],
  
})
export class AppuserModule {}
