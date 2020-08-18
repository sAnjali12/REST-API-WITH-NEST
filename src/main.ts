import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './filters/http.exception.filter'
// import { ValidationExceptionFilter } from './filters/validation.exception.filter'




async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new HttpExceptionFilter())
  // app.useGlobalFilters(new ValidationExceptionFilter())



  await app.listen(4000);
}
bootstrap();
