import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SampleModule } from './sample/sample.module';
import { AppService } from './app.service';

@Module({
  imports: [SampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

