import { Controller, Get } from '@nestjs/common';
import { SystemParameterService } from './system-parameter.service';

@Controller('system-parameter')
export class SystemParameterController {
  constructor(
    private readonly systemParameterService: SystemParameterService,
  ) {}

  @Get()
  findAll() {
    return this.systemParameterService.findAll();
  }
}
