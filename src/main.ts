import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { App } from './app'
import { appConfig } from './config'
import { AllExceptionsFilter } from '@filters'


setImmediate(async(): Promise<void> => {
  const app = await NestFactory.createMicroservice<TcpOptions>(App, {
    transport: Transport.TCP,
    options: appConfig.options
  } as TcpOptions)

  

  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalPipes(new ValidationPipe())

  
  await app.listen()

  
})
