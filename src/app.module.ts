import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { configuration } from './config/configuration';

@Module({
  imports: [
  ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      load:[configuration]
    }),
    
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
