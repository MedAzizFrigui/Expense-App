import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import{ValidationPipe}from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,//it gets rid of anything that did not appear in the dto
    transform:true,// telling nestjs that we want to give it the ability tot ransform our object
    transformOptions: {
      enableImplicitConversion: true
    },
  }));//in order to activate the validation globally
  await app.listen(3000);
}
bootstrap();
