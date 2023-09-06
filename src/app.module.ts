import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpecialitiesModule } from './specialities/specialities.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SpecialitiesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
