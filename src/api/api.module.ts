import { Module } from '@nestjs/common';

import { ApiService } from './api.service';
import { ConfigurableModuleClass } from './api.module-definition';

@Module({
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule extends ConfigurableModuleClass {}
