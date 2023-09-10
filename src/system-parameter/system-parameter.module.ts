import { Module } from '@nestjs/common';
import { SystemParameterService } from './system-parameter.service';
import { SystemParameterController } from './system-parameter.controller';

@Module({
  controllers: [SystemParameterController],
  providers: [SystemParameterService],
})
export class SystemParameterModule {}
