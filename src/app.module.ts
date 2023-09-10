import { Module } from '@nestjs/common';
import { SpecialitiesModule } from './specialities/specialities.module';
import { PrismaModule } from './prisma/prisma.module';
import { SystemParameterModule } from './system-parameter/system-parameter.module';

@Module({
  imports: [SpecialitiesModule, PrismaModule, SystemParameterModule],
})
export class AppModule {}
