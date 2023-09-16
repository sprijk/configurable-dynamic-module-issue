import { ConfigurableModuleBuilder } from '@nestjs/common';

import { ApiModuleConfig } from './interfaces/api-module-config.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ApiModuleConfig>().build();
