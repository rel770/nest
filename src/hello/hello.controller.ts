import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    // Return welcome message with first and last name
    return 'Welcome! My name is John Doe.';
  }
}
