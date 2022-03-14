import { Injectable } from '@nestjs/common';
import { Timestamp } from 'src/interface/timestamp.interface';

@Injectable()
export class ApiService {
  getTime(id: string): Timestamp {
    return { unix: new Date(id).getTime(), utc: new Date(id).toUTCString() };
  }
}
