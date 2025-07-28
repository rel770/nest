import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
  @Get()
  getTime(): string {
    // Return current time in readable format
    const currentTime = new Date().toLocaleString();
    return `Current time is: ${currentTime}`;
  }
}
