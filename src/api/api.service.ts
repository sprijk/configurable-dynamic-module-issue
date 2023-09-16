import { Injectable, Inject } from '@nestjs/common';

import { MODULE_OPTIONS_TOKEN } from './api.module-definition';
import { ApiModuleConfig } from './interfaces/api-module-config.interface';

@Injectable()
export class ApiService {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private config: ApiModuleConfig) {
    console.log('ApiService config:', config);
  }
}
