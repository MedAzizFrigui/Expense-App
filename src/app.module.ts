import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';
import {CustomInterceptor} from "./custom.interceptor";

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController],
  providers: [AppService, {
    provide : APP_INTERCEPTOR, // for every single http request , we want to apply an intercepter
    useClass : CustomInterceptor, // this is a type of interceptor(Serializer interceptor) : it modifies and change our data
  }],
})
export class AppModule {}
