import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import serverConfig from './config/server';

const config = ConfigModule.forRoot({
  isGlobal: true,
  load: [serverConfig],
});

const api = ApiModule.registerAsync([
  {
    name: 'API_SERVICE',
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      return {
        url: config.get<string>('server.host'),
        port: config.get<string>('server.port'),
      };
    },
  },
]);

@Module({
  imports: [config, api],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
