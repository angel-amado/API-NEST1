import { Controller, Get, Param } from '@nestjs/common';
import { Timestamp } from 'src/interface/timestamp.interface';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Timestamp {
    return this.apiService.getTime(id);
  }
}
