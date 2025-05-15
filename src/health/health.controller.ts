import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('health')
@ApiExcludeController()
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      time: new Date().toISOString(),
    };
  }
}
