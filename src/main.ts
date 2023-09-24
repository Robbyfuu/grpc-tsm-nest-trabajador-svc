import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { protobufPackage } from './trabajador/trabajadores.pb';
import { join } from 'path';
import { HttpExceptionFilter } from './common/helpers/http-exception.helper';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `${process.env.GRPC_SERVER_HOST_TRABAJADOR}:50052`,
        package: protobufPackage,
        protoPath: join(
          'node_modules/grpc-tsm-nestjs-proto/proto/trabajadores.proto',
        ),
      },
    },
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen();
}
bootstrap();
